CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'member' CHECK (role IN ('manager', 'member')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE equipment (
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE loans (
    user_id INTEGER REFERENCES users(id) NOT NULL,
    borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
);

ON loans (equipment_id)

