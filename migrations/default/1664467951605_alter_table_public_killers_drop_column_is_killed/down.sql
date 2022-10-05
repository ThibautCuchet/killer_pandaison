alter table "public"."killers" alter column "is_killed" set default false;
alter table "public"."killers" alter column "is_killed" drop not null;
alter table "public"."killers" add column "is_killed" bool;
