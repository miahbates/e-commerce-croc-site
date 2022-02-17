BEGIN;

DROP TABLE IF EXISTS products, orders CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR (20) NOT NULL,
  color VARCHAR(15) NOT NULL,
  type VARCHAR(10) NOT NULL, 
  price INTEGER NOT NULL,
  size TEXT NOT NULL,
  stock INTEGER NOT NULL,
  img TEXT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  quantity INTEGER NOT NULL, 
  size TEXT NOT NULL,
  product_id INTEGER REFERENCES products(id)
);

-- CREATE TABLE sessions (
--   sid TEXT PRIMARY KEY,
--   data JSON NOT NULL
-- );

INSERT INTO products (title, color, type, price, size, stock, img) VALUES
  ('Classic Green Crocs','green', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('Classic White Crocs', 'white', 'classic', 40.00, '{"size":["small","medium","large"]}', 10, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('Platform Blue Crocs','blue', 'platform', 50.00, '{"size":["small","medium","large"]}', 10, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('Platform Red Crocs','red', 'platform', 50.00, '{"size":["small","medium","large"]}', 10, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('Yellow Boot Crocs', 'yellow', 'boot', 60.00, '{"size":["small","medium","large"]}', 10, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('Purple Boot Crocs','purple', 'boot', 60.00, '{"size":["small","medium","large"]}', 10, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919');



INSERT INTO orders (size, quantity, product_id) VALUES
('medium', 2, 3);


COMMIT;
