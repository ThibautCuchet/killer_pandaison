import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import gql from "graphql-tag";
import { Fragment, useContext, useState } from "react";
import { GameContext, User } from "../contexts/game";
import {
  GetUsersQuery,
  GetUsersQueryVariables,
  SetPresentMutation,
  SetPresentMutationVariables,
} from "../types/graphql";
import { hasura } from "../utils/gql";

const SelectUser = () => {
  const { setUser } = useContext(GameContext);
  const [selectedUser, setSelectedUser] = useState<User>();

  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery<
    GetUsersQueryVariables,
    unknown,
    GetUsersQuery
  >(["users"], () =>
    hasura(gql`
      query GetUsers {
        users {
          id
          fullname
        }
      }
    `)
  );

  const presentMutation = useMutation<
    SetPresentMutation,
    unknown,
    SetPresentMutationVariables
  >(["set-resent"], ({ userId }) =>
    hasura<SetPresentMutation, SetPresentMutationVariables>(
      gql`
        mutation SetPresent($userId: uuid!) {
          update_users(
            where: { id: { _eq: $userId } }
            _set: { is_present: true }
          ) {
            affected_rows
          }
        }
      `,
      {
        userId,
      }
    )
  );

  const filteredPeople =
    query === ""
      ? data?.users
      : data?.users.filter((person) => {
          if (!person.fullname) return "";
          return person?.fullname.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex items-center flex-col">
      <h1>Killer</h1>
      <div className="flex flex-col items-end">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Combobox
            value={selectedUser?.fullname}
            onChange={(id) => {
              const user = data?.users.find((user) => user.id === id);
              setSelectedUser({
                id: user?.id,
                fullname: user?.fullname || "",
              });
            }}
          >
            <div className="relative w-56 mt-10">
              <div className="relative w-full overflow-hidden text-left bg-white rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  autoComplete="off"
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full py-2 pl-3 pr-10 text-lg leading-5 text-gray-900 border-none focus:ring-0"
                  placeholder="Qui es-tu ?"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDownIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople?.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      value={person.id}
                      className="p-2 text-lg"
                    >
                      {person.fullname}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        )}

        <div className="mt-10">
          <button
            type="button"
            disabled={!selectedUser}
            onClick={() => {
              setUser(selectedUser as User);
              presentMutation.mutateAsync({ userId: selectedUser?.id });
            }}
            className="inline-flex items-center justify-center w-24 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:cursor-not-allowed disabled:bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectUser;
