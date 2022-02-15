BEGIN;

DROP TABLE IF EXISTS users, products CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(30),
  password TEXT NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  title VARCHAR(30),
  product_type VARCHAR(30),
  description VARCHAR(140),
  price VARCHAR(10),
  seller_id INTEGER REFERENCES devpop_users(id)
);

-- CREATE TABLE sessions (
--   sid TEXT PRIMARY KEY,
--   data JSON NOT NULL
-- );



INSERT INTO users (name, email, password) VALUES
  ('Milly', 'milly@milly.com', 123),
  ('Orian', 'orian@orian.com', 123),
  ('Juliette', 'juliette@juliette.com', 123),
  ('Miah', 'miah@miah.com', 123)
;


COMMIT;
