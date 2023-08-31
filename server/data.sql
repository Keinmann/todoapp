CREATE TABLE plans (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    progress INT,
    date VARCHAR(100)
);

