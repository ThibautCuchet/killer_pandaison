alter table "public"."games"
  add constraint "games_killed_by_id_fkey"
  foreign key ("killed_by_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
