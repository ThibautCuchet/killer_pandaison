CREATE TABLE "public"."users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "firstname" text NOT NULL, "lastname" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("firstname", "lastname"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
