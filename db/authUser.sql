select * from pg_users
where username = $1 and password = $2;