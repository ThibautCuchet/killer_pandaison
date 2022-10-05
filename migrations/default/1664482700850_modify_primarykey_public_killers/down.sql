alter table "public"."killers"
    add constraint "killers_pkey"
    primary key ("killer_id", "event_id");
