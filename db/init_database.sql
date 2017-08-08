CREATE TABLE IF NOT EXISTS Users(
id serial Primary key,
name varchar(50) NOT NULL,
email varchar(100) NOT NULL,
city varchar(100) NOT NULL,
zipcode varchar(100) NOT NULL
)
