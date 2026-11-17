CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
