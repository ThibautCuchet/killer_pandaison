alter table "public"."killers"
  add constraint "killers_current_user_id_fkey"
  foreign key ("current_user_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
