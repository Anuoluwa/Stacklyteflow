DROP DATABASE IF EXISTS "litestackDB";
DROP DATABASE IF EXISTS "test-litestackDB";
CREATE DATABASE "litestackDB";
CREATE DATABASE "test-litestackDB";

INSERT INTO comments (comment) VALUES ('sample comment')
INSERT INTO answers (reply) VALUES ('sample answer')
INSERT INTO questions (title, body) VALUES ('sample title','sample body')
CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username varchar(100) not null,
  email varchar(100) not null,
  password varchar(100) not null,
  CONSTRAINT unique_data UNIQUE (email),
  at TIMESTAMP DEFAULT Now()
  );
CREATE TABLE questions (
  question_id serial PRIMARY KEY,
  title text not null,
  body text not null,
  user_id SERIAL references users(user_id),
  created_at TIMESTAMP DEFAULT Now()
);
drop table answers
CREATE TABLE answers (
  answer_id serial PRIMARY KEY,
  reply text not null,
  user_id SERIAL references users(user_id),
  question_id SERIAL references questions(question_id),
  created_at TIMESTAMP DEFAULT Now()
);
CREATE TABLE comments (
  comment_id serial PRIMARY KEY,
  comment text not null,
  user_id SERIAL references users(user_id),
  answer_id SERIAL references answers(answer_id),
  created_at TIMESTAMP DEFAULT Now()
);
CREATE TABLE votes (
  vote_id serial PRIMARY KEY,
  vote integer ,
  user_id SERIAL references users(user_id),
  answer_id SERIAL references answers(answer_id),
  created_at TIMESTAMP DEFAULT Now()
);