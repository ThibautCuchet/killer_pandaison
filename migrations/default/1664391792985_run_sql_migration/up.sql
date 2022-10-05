CREATE FUNCTION full_name(user_row users)
RETURNS TEXT AS $$
  SELECT user_row.firstname || ' ' || user_row.lastname
$$ LANGUAGE sql STABLE;
