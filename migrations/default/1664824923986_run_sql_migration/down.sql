-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE FUNCTION getKiller(userId uuid, eventId uuid)
-- RETURNS TEXT AS $$
--     SELECT user_id
--     FROM games
--     WHERE to_kill_id = userId AND event_id = eventId
-- $$ LANGUAGE sql STABLE;
