CREATE TABLE "public"."event" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text NOT NULL DEFAULT '"killer"', "start_date" timestamptz NOT NULL, "end_date" timestamptz NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
