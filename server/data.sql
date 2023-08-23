CREATE TABLE plans (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    description VARCHAR(500),
    date VARCHAR(100)
);

