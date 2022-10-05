CREATE FUNCTION getKiller(userId uuid, eventId uuid)
RETURNS TEXT AS $$
    SELECT user_id
    FROM games
    WHERE to_kill_id = userId AND event_id = eventId
$$ LANGUAGE sql STABLE;
