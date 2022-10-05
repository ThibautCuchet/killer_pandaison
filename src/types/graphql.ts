export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions';
  action: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  kills: Array<Kills>;
  /** An aggregate relationship */
  kills_aggregate: Kills_Aggregate;
};


/** columns and relationships of "actions" */
export type ActionsKillsArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


/** columns and relationships of "actions" */
export type ActionsKills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};

/** aggregated selection of "actions" */
export type Actions_Aggregate = {
  __typename?: 'actions_aggregate';
  aggregate?: Maybe<Actions_Aggregate_Fields>;
  nodes: Array<Actions>;
};

/** aggregate fields of "actions" */
export type Actions_Aggregate_Fields = {
  __typename?: 'actions_aggregate_fields';
  avg?: Maybe<Actions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Actions_Max_Fields>;
  min?: Maybe<Actions_Min_Fields>;
  stddev?: Maybe<Actions_Stddev_Fields>;
  stddev_pop?: Maybe<Actions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Actions_Stddev_Samp_Fields>;
  sum?: Maybe<Actions_Sum_Fields>;
  var_pop?: Maybe<Actions_Var_Pop_Fields>;
  var_samp?: Maybe<Actions_Var_Samp_Fields>;
  variance?: Maybe<Actions_Variance_Fields>;
};


/** aggregate fields of "actions" */
export type Actions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Actions_Avg_Fields = {
  __typename?: 'actions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Actions_Bool_Exp>>;
  _not?: InputMaybe<Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Actions_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kills?: InputMaybe<Kills_Bool_Exp>;
};

/** unique or primary key constraints on table "actions" */
export enum Actions_Constraint {
  /** unique or primary key constraint */
  ActionsPkey = 'actions_pkey'
}

/** input type for incrementing numeric columns in table "actions" */
export type Actions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  action?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  kills?: InputMaybe<Kills_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Actions_Max_Fields = {
  __typename?: 'actions_max_fields';
  action?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields';
  action?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "actions" */
export type Actions_Mutation_Response = {
  __typename?: 'actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions>;
};

/** input type for inserting object relation for remote table "actions" */
export type Actions_Obj_Rel_Insert_Input = {
  data: Actions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};

/** on_conflict condition type for table "actions" */
export type Actions_On_Conflict = {
  constraint: Actions_Constraint;
  update_columns?: Array<Actions_Update_Column>;
  where?: InputMaybe<Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "actions". */
export type Actions_Order_By = {
  action?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kills_aggregate?: InputMaybe<Kills_Aggregate_Order_By>;
};

/** primary key columns input for table: actions */
export type Actions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "actions" */
export type Actions_Set_Input = {
  action?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Actions_Stddev_Fields = {
  __typename?: 'actions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Actions_Stddev_Pop_Fields = {
  __typename?: 'actions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Actions_Stddev_Samp_Fields = {
  __typename?: 'actions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Actions_Sum_Fields = {
  __typename?: 'actions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Actions_Var_Pop_Fields = {
  __typename?: 'actions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Actions_Var_Samp_Fields = {
  __typename?: 'actions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Actions_Variance_Fields = {
  __typename?: 'actions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  end_date: Scalars['timestamptz'];
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  kills: Array<Kills>;
  /** An aggregate relationship */
  kills_aggregate: Kills_Aggregate;
  start_date: Scalars['timestamptz'];
  type: Scalars['String'];
};


/** columns and relationships of "events" */
export type EventsGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsKillsArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsKills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  kills?: InputMaybe<Kills_Bool_Exp>;
  start_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
  /** unique or primary key constraint */
  EventPkey = 'event_pkey'
}

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  end_date?: InputMaybe<Scalars['timestamptz']>;
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  kills?: InputMaybe<Kills_Arr_Rel_Insert_Input>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** input type for inserting object relation for remote table "events" */
export type Events_Obj_Rel_Insert_Input = {
  data: Events_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  end_date?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  kills_aggregate?: InputMaybe<Kills_Aggregate_Order_By>;
  start_date?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  end_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Type = 'type'
}

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  /** An object relationship */
  event: Events;
  event_id: Scalars['uuid'];
  /** An object relationship */
  have_to_kill_by?: Maybe<Games>;
  /** An object relationship */
  kill?: Maybe<Kills>;
  killed_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  killed_by?: Maybe<Users>;
  killed_by_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  to_kill: Users;
  to_kill_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
};


/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Games_Max_Order_By>;
  min?: InputMaybe<Games_Min_Order_By>;
};

/** input type for inserting array relation for remote table "games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  have_to_kill_by?: InputMaybe<Games_Bool_Exp>;
  kill?: InputMaybe<Kills_Bool_Exp>;
  killed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  killed_by?: InputMaybe<Users_Bool_Exp>;
  killed_by_id?: InputMaybe<Uuid_Comparison_Exp>;
  to_kill?: InputMaybe<Users_Bool_Exp>;
  to_kill_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint */
  GamePkey = 'game_pkey'
}

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']>;
  have_to_kill_by?: InputMaybe<Games_Obj_Rel_Insert_Input>;
  kill?: InputMaybe<Kills_Obj_Rel_Insert_Input>;
  killed_at?: InputMaybe<Scalars['timestamptz']>;
  killed_by?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  killed_by_id?: InputMaybe<Scalars['uuid']>;
  to_kill?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  to_kill_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  event_id?: Maybe<Scalars['uuid']>;
  killed_at?: Maybe<Scalars['timestamptz']>;
  killed_by_id?: Maybe<Scalars['uuid']>;
  to_kill_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  event_id?: InputMaybe<Order_By>;
  killed_at?: InputMaybe<Order_By>;
  killed_by_id?: InputMaybe<Order_By>;
  to_kill_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  event_id?: Maybe<Scalars['uuid']>;
  killed_at?: Maybe<Scalars['timestamptz']>;
  killed_by_id?: Maybe<Scalars['uuid']>;
  to_kill_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  event_id?: InputMaybe<Order_By>;
  killed_at?: InputMaybe<Order_By>;
  killed_by_id?: InputMaybe<Order_By>;
  to_kill_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type Games_Obj_Rel_Insert_Input = {
  data: Games_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** on_conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  have_to_kill_by?: InputMaybe<Games_Order_By>;
  kill?: InputMaybe<Kills_Order_By>;
  killed_at?: InputMaybe<Order_By>;
  killed_by?: InputMaybe<Users_Order_By>;
  killed_by_id?: InputMaybe<Order_By>;
  to_kill?: InputMaybe<Users_Order_By>;
  to_kill_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  KilledAt = 'killed_at',
  /** column name */
  KilledById = 'killed_by_id',
  /** column name */
  ToKillId = 'to_kill_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  event_id?: InputMaybe<Scalars['uuid']>;
  killed_at?: InputMaybe<Scalars['timestamptz']>;
  killed_by_id?: InputMaybe<Scalars['uuid']>;
  to_kill_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  KilledAt = 'killed_at',
  /** column name */
  KilledById = 'killed_by_id',
  /** column name */
  ToKillId = 'to_kill_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "kills" */
export type Kills = {
  __typename?: 'kills';
  /** An object relationship */
  action: Actions;
  action_id: Scalars['Int'];
  /** An object relationship */
  event: Events;
  event_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "kills" */
export type Kills_Aggregate = {
  __typename?: 'kills_aggregate';
  aggregate?: Maybe<Kills_Aggregate_Fields>;
  nodes: Array<Kills>;
};

/** aggregate fields of "kills" */
export type Kills_Aggregate_Fields = {
  __typename?: 'kills_aggregate_fields';
  avg?: Maybe<Kills_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kills_Max_Fields>;
  min?: Maybe<Kills_Min_Fields>;
  stddev?: Maybe<Kills_Stddev_Fields>;
  stddev_pop?: Maybe<Kills_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kills_Stddev_Samp_Fields>;
  sum?: Maybe<Kills_Sum_Fields>;
  var_pop?: Maybe<Kills_Var_Pop_Fields>;
  var_samp?: Maybe<Kills_Var_Samp_Fields>;
  variance?: Maybe<Kills_Variance_Fields>;
};


/** aggregate fields of "kills" */
export type Kills_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kills" */
export type Kills_Aggregate_Order_By = {
  avg?: InputMaybe<Kills_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kills_Max_Order_By>;
  min?: InputMaybe<Kills_Min_Order_By>;
  stddev?: InputMaybe<Kills_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kills_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kills_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kills_Sum_Order_By>;
  var_pop?: InputMaybe<Kills_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kills_Var_Samp_Order_By>;
  variance?: InputMaybe<Kills_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "kills" */
export type Kills_Arr_Rel_Insert_Input = {
  data: Array<Kills_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Kills_On_Conflict>;
};

/** aggregate avg on columns */
export type Kills_Avg_Fields = {
  __typename?: 'kills_avg_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kills" */
export type Kills_Avg_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kills". All fields are combined with a logical 'AND'. */
export type Kills_Bool_Exp = {
  _and?: InputMaybe<Array<Kills_Bool_Exp>>;
  _not?: InputMaybe<Kills_Bool_Exp>;
  _or?: InputMaybe<Array<Kills_Bool_Exp>>;
  action?: InputMaybe<Actions_Bool_Exp>;
  action_id?: InputMaybe<Int_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "kills" */
export enum Kills_Constraint {
  /** unique or primary key constraint */
  KillsPkey = 'kills_pkey'
}

/** input type for incrementing numeric columns in table "kills" */
export type Kills_Inc_Input = {
  action_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "kills" */
export type Kills_Insert_Input = {
  action?: InputMaybe<Actions_Obj_Rel_Insert_Input>;
  action_id?: InputMaybe<Scalars['Int']>;
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Kills_Max_Fields = {
  __typename?: 'kills_max_fields';
  action_id?: Maybe<Scalars['Int']>;
  event_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "kills" */
export type Kills_Max_Order_By = {
  action_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kills_Min_Fields = {
  __typename?: 'kills_min_fields';
  action_id?: Maybe<Scalars['Int']>;
  event_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "kills" */
export type Kills_Min_Order_By = {
  action_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kills" */
export type Kills_Mutation_Response = {
  __typename?: 'kills_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kills>;
};

/** input type for inserting object relation for remote table "kills" */
export type Kills_Obj_Rel_Insert_Input = {
  data: Kills_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kills_On_Conflict>;
};

/** on_conflict condition type for table "kills" */
export type Kills_On_Conflict = {
  constraint: Kills_Constraint;
  update_columns?: Array<Kills_Update_Column>;
  where?: InputMaybe<Kills_Bool_Exp>;
};

/** Ordering options when selecting data from "kills". */
export type Kills_Order_By = {
  action?: InputMaybe<Actions_Order_By>;
  action_id?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kills */
export type Kills_Pk_Columns_Input = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "kills" */
export enum Kills_Select_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "kills" */
export type Kills_Set_Input = {
  action_id?: InputMaybe<Scalars['Int']>;
  event_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Kills_Stddev_Fields = {
  __typename?: 'kills_stddev_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kills" */
export type Kills_Stddev_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kills_Stddev_Pop_Fields = {
  __typename?: 'kills_stddev_pop_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kills" */
export type Kills_Stddev_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kills_Stddev_Samp_Fields = {
  __typename?: 'kills_stddev_samp_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kills" */
export type Kills_Stddev_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kills_Sum_Fields = {
  __typename?: 'kills_sum_fields';
  action_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "kills" */
export type Kills_Sum_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** update columns of table "kills" */
export enum Kills_Update_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Kills_Var_Pop_Fields = {
  __typename?: 'kills_var_pop_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kills" */
export type Kills_Var_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kills_Var_Samp_Fields = {
  __typename?: 'kills_var_samp_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kills" */
export type Kills_Var_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kills_Variance_Fields = {
  __typename?: 'kills_variance_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kills" */
export type Kills_Variance_Order_By = {
  action_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>;
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>;
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "events" */
  delete_events_by_pk?: Maybe<Events>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "kills" */
  delete_kills?: Maybe<Kills_Mutation_Response>;
  /** delete single row from the table: "kills" */
  delete_kills_by_pk?: Maybe<Kills>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>;
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insert_events_one?: Maybe<Events>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "kills" */
  insert_kills?: Maybe<Kills_Mutation_Response>;
  /** insert a single row into the table: "kills" */
  insert_kills_one?: Maybe<Kills>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>;
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "events" */
  update_events_by_pk?: Maybe<Events>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "kills" */
  update_kills?: Maybe<Kills_Mutation_Response>;
  /** update single row of the table: "kills" */
  update_kills_by_pk?: Maybe<Kills>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ActionsArgs = {
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_KillsArgs = {
  where: Kills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kills_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_KillsArgs = {
  objects: Array<Kills_Insert_Input>;
  on_conflict?: InputMaybe<Kills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kills_OneArgs = {
  object: Kills_Insert_Input;
  on_conflict?: InputMaybe<Kills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActionsArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_By_PkArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  pk_columns: Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _set?: InputMaybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _set?: InputMaybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_KillsArgs = {
  _inc?: InputMaybe<Kills_Inc_Input>;
  _set?: InputMaybe<Kills_Set_Input>;
  where: Kills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kills_By_PkArgs = {
  _inc?: InputMaybe<Kills_Inc_Input>;
  _set?: InputMaybe<Kills_Set_Input>;
  pk_columns: Kills_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "actions" */
  actions: Array<Actions>;
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** An array relationship */
  kills: Array<Kills>;
  /** An aggregate relationship */
  kills_aggregate: Kills_Aggregate;
  /** fetch data from the table: "kills" using primary key columns */
  kills_by_pk?: Maybe<Kills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootKillsArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


export type Query_RootKills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


export type Query_RootKills_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "actions" */
  actions: Array<Actions>;
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** An array relationship */
  kills: Array<Kills>;
  /** An aggregate relationship */
  kills_aggregate: Kills_Aggregate;
  /** fetch data from the table: "kills" using primary key columns */
  kills_by_pk?: Maybe<Kills>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootKillsArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


export type Subscription_RootKills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


export type Subscription_RootKills_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  firstname: Scalars['String'];
  /** A computed field, executes function "full_name" */
  fullname?: Maybe<Scalars['String']>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An array relationship */
  gamesByKilledById: Array<Games>;
  /** An aggregate relationship */
  gamesByKilledById_aggregate: Games_Aggregate;
  /** An array relationship */
  gamesByUserId: Array<Games>;
  /** An aggregate relationship */
  gamesByUserId_aggregate: Games_Aggregate;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['uuid'];
  is_present: Scalars['Boolean'];
  /** An array relationship */
  kills: Array<Kills>;
  /** An aggregate relationship */
  kills_aggregate: Kills_Aggregate;
  lastname: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGamesByKilledByIdArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGamesByKilledById_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGamesByUserIdArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGamesByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersKillsArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersKills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kills_Order_By>>;
  where?: InputMaybe<Kills_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  fullname?: InputMaybe<String_Comparison_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  gamesByKilledById?: InputMaybe<Games_Bool_Exp>;
  gamesByUserId?: InputMaybe<Games_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_present?: InputMaybe<Boolean_Comparison_Exp>;
  kills?: InputMaybe<Kills_Bool_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersFirstnameLastnameKey = 'users_firstname_lastname_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  firstname?: InputMaybe<Scalars['String']>;
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  gamesByKilledById?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  gamesByUserId?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  is_present?: InputMaybe<Scalars['Boolean']>;
  kills?: InputMaybe<Kills_Arr_Rel_Insert_Input>;
  lastname?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastname?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastname?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  firstname?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  gamesByKilledById_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  gamesByUserId_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_present?: InputMaybe<Order_By>;
  kills_aggregate?: InputMaybe<Kills_Aggregate_Order_By>;
  lastname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  IsPresent = 'is_present',
  /** column name */
  Lastname = 'lastname'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_present?: InputMaybe<Scalars['Boolean']>;
  lastname?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  IsPresent = 'is_present',
  /** column name */
  Lastname = 'lastname'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetToKillQueryVariables = Exact<{
  eventId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type GetToKillQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', to_kill: { __typename?: 'users', fullname?: string | null, kills: Array<{ __typename?: 'kills', action: { __typename?: 'actions', action: string } }> }, killed_by?: { __typename?: 'users', fullname?: string | null } | null }> };

export type GetNextKillerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNextKillerQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'events', id: any, start_date: any }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, fullname?: string | null }> };

export type SetPresentMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type SetPresentMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type GetGameContreUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
  eventId: Scalars['uuid'];
}>;


export type GetGameContreUserQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', to_kill_id: any, user_id: any, to_kill: { __typename?: 'users', fullname?: string | null }, have_to_kill_by?: { __typename?: 'games', user_id: any, user: { __typename?: 'users', fullname?: string | null } } | null, kill?: { __typename?: 'kills', action_id: number } | null }> };

export type UpdateContreGameMutationVariables = Exact<{
  eventId: Scalars['uuid'];
  userId: Scalars['uuid'];
  killedBy: Scalars['uuid'];
  haveToKill: Scalars['uuid'];
  actionId: Scalars['Int'];
}>;


export type UpdateContreGameMutation = { __typename?: 'mutation_root', killed?: { __typename?: 'games', user_id: any } | null, killer?: { __typename?: 'games', user_id: any } | null, update_kills?: { __typename?: 'kills_mutation_response', affected_rows: number } | null };

export type GetPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any }>, actions: Array<{ __typename?: 'actions', id: number }> };

export type InsertKillsMutationVariables = Exact<{
  kills: Array<Kills_Insert_Input> | Kills_Insert_Input;
  games: Array<Games_Insert_Input> | Games_Insert_Input;
}>;


export type InsertKillsMutation = { __typename?: 'mutation_root', insert_kills?: { __typename?: 'kills_mutation_response', affected_rows: number } | null, insert_games?: { __typename?: 'games_mutation_response', affected_rows: number } | null };

export type GetGameUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
  eventId: Scalars['uuid'];
}>;


export type GetGameUserQuery = { __typename?: 'query_root', games: Array<{ __typename?: 'games', to_kill_id: any, user_id: any, have_to_kill_by?: { __typename?: 'games', user_id: any, user: { __typename?: 'users', fullname?: string | null } } | null }> };

export type UpdateGameMutationVariables = Exact<{
  eventId: Scalars['uuid'];
  userId: Scalars['uuid'];
  killedBy: Scalars['uuid'];
  haveToKill: Scalars['uuid'];
}>;


export type UpdateGameMutation = { __typename?: 'mutation_root', killed?: { __typename?: 'games', user_id: any } | null, killer?: { __typename?: 'games', user_id: any } | null };
