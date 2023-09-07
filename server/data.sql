CREATE TABLE IF NOT EXISTS plans (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    progress INT,
    date VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS users  (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    content TEXT,
    date VARCHAR(255)
);

-- INSERT INTO notes(user_email, title, content, date) VALUES ('keinmann@mail.ru', 'first note!', 'This is my first note. I just need an example', now());
-- tati.baranowa@mail.ru

CREATE TABLE IF NOT EXISTS stars (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    family INT,
    job INT,
    implementation INT,
    study INT,
    money INT,
    soul INT,
    hobby INT,
    rest INT, 
    image INT,
    health INT,
    help INT,
    friends INT,
    date VARCHAR(255)
);