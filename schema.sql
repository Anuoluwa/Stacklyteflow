DROP DATABASE IF EXISTS "litestackDB";
DROP DATABASE IF EXISTS "test-litestackDB";
CREATE DATABASE "litestackDB";
CREATE DATABASE "test-litestackDB";

INSERT INTO comments (comment) VALUES ('sample comment')
INSERT INTO answers (reply) VALUES ('sample answer')
INSERT INTO questions (title, body) VALUES ('sample title','sample body')
CREATE TABLE comments (
  id serial PRIMARY KEY,
  comment varchar(150) not null,
  user_id SERIAL references users(id),
  answer_id SERIAL references answers(id),
  created_at TIMESTAMPTZ DEFAULT Now()
);
CREATE TABLE answers (
  id serial PRIMARY KEY,
  reply varchar(200) not null,
  user_id SERIAL references users(id),
  question_id SERIAL references questions(id),
  created_at TIMESTAMPTZ DEFAULT Now()
);
CREATE TABLE questions (
  id serial PRIMARY KEY,
  title varchar(100) not null,
  body varchar(200) not null,
  user_id SERIAL references users(id),
  created_at TIMESTAMPTZ DEFAULT Now()
);
INSERT INTO users (username, email,password) VALUES ('admin','admin@admin.com','adminsecret')
CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(100) not null,
  email varchar(100) not null,
  password varchar(100) not null,
  CONSTRAINT unique_data UNIQUE (email),
  created_at TIMESTAMPTZ DEFAULT Now()
);
No rows returned
