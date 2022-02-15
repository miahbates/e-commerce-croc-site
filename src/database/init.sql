BEGIN;

DROP TABLE IF EXISTS products, orders CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  color VARCHAR(15) NOT NULL,
  type VARCHAR(10) NOT NULL, 
  price INTEGER NOT NULL,
  size TEXT NOT NULL,
  stock INTEGER NOT NULL,
  img TEXT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  quantity INTEGER NOT NULL, 
  product_id INTEGER REFERENCES products(id)
);

-- CREATE TABLE sessions (
--   sid TEXT PRIMARY KEY,
--   data JSON NOT NULL
-- );



INSERT INTO products (color, type, price, size, stock, img) VALUES
  ('green', 'standard', 40.00, 'M', 1, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('white', 'standard', 40.00, 'S', 1, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('blue', 'platform', 50.00, 'S', 1, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('red', 'platform', 50.00, 'S', 1, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('yellow', 'boot', 60.00, 'S', 1, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919'),
  ('purple', 'boot', 60.00, 'S', 1, 'https://images-ext-1.discordapp.net/external/LhiRp0jJKqKBQQ_7irYjtQ2PpOW4J5TTGG2b0468LVs/https/media.crocs.com/images/t_pdpzoom/f_auto%252Cq_auto/products/203591_7A9_ALT100/crocs?width=1108&height=919')
;


INSERT INTO orders (username, quantity, product_id) VALUES
('juliette', 2)
;

COMMIT;
