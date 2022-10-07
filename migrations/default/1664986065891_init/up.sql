SET check_function_bodies = false;
CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    is_present boolean DEFAULT false NOT NULL
);
CREATE FUNCTION public.full_name(user_row public.users) RETURNS text
    LANGUAGE sql STABLE
    AS $$
  SELECT user_row.firstname || ' ' || user_row.lastname
$$;
CREATE FUNCTION public.getkiller(userid uuid, eventid uuid) RETURNS text
    LANGUAGE sql STABLE
    AS $$
    SELECT user_id
    FROM games
    WHERE to_kill_id = userId AND event_id = eventId
$$;
CREATE TABLE public.actions (
    id integer NOT NULL,
    action text NOT NULL
);
CREATE SEQUENCE public.actions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.actions_id_seq OWNED BY public.actions.id;
CREATE TABLE public.events (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    type text DEFAULT '"killer"'::text NOT NULL,
    start_date timestamp with time zone NOT NULL,
    end_date timestamp with time zone NOT NULL
);
CREATE TABLE public.games (
    event_id uuid NOT NULL,
    user_id uuid NOT NULL,
    killed_at timestamp with time zone,
    killed_by_id uuid,
    to_kill_id uuid NOT NULL
);
CREATE TABLE public.kills (
    event_id uuid NOT NULL,
    user_id uuid NOT NULL,
    action_id integer NOT NULL
);
ALTER TABLE ONLY public.actions ALTER COLUMN id SET DEFAULT nextval('public.actions_id_seq'::regclass);
ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.events
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.games
    ADD CONSTRAINT game_pkey PRIMARY KEY (event_id, user_id);
ALTER TABLE ONLY public.kills
    ADD CONSTRAINT kills_pkey PRIMARY KEY (event_id, user_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_firstname_lastname_key UNIQUE (firstname, lastname);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.games
    ADD CONSTRAINT game_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.games
    ADD CONSTRAINT game_to_kill_fkey FOREIGN KEY (to_kill_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.games
    ADD CONSTRAINT game_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_killed_by_id_fkey FOREIGN KEY (killed_by_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.kills
    ADD CONSTRAINT kills_actions_fkey FOREIGN KEY (action_id) REFERENCES public.actions(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.kills
    ADD CONSTRAINT kills_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.kills
    ADD CONSTRAINT kills_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
