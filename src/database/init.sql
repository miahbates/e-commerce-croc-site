BEGIN;

DROP TABLE IF EXISTS products, orders CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR (30) NOT NULL,
  color VARCHAR(30) NOT NULL,
  type VARCHAR(20) NOT NULL, 
  price INTEGER NOT NULL,
  size TEXT NOT NULL,
  stock INTEGER NOT NULL,
  img TEXT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  quantity INTEGER NOT NULL, 
  size TEXT NOT NULL,
  product_id INTEGER REFERENCES products(id),
  product_data TEXT
);

-- CREATE TABLE sessions (
--   sid TEXT PRIMARY KEY,
--   data JSON NOT NULL
-- );

INSERT INTO products (title, color, type, price, size, stock, img) VALUES
  ('Classic Green Crocs','green', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_3E8_ALT100/crocs'),
  ('Classic Pink Crocs','pink', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_6QQ_ALT100/crocs'),
  ('Classic Orange Crocs','orange', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_83A_ALT100/crocs'),
  ('Classic Orange Crocs','blue', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_4O9_ALT100/crocs'),
  ('Classic Teal Crocs','teal', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_4SL_ALT100/crocs'),
  ('Classic Red Crocs','red', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_6EN_ALT100/crocs'),
  ('Classic White Crocs', 'white', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_100_ALT100/crocs'),
  ('Platform Purple Crocs','purple', 'platform', 50.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206750_5PR_ALT100/crocs'),
  ('Platform Blue Crocs','blue', 'platform', 50.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206750_4SS_ALT100/crocs'),
  ('Boot Pink Crocs', 'pink', 'boot', 60.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206630_6GD_ALT100/crocs'),
  ('Boot Black Crocs','black', 'boot', 60.00, '{"size":["small","medium","large"]}', 10, 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206630_060_ALT100/crocs');



INSERT INTO orders (size, quantity, product_id) VALUES
('medium', 2, 3);


COMMIT;
