import db from "./connection.js";
import crypto from "node:crypto";

export function getProducts() {
  const GET_PRODUCTS = `SELECT * FROM products`;
  return db.query(GET_PRODUCTS).then((data) => {
    // console.log("data", data.rows);
    // console.log("data rows", data.rows[0]);
    return data.rows;
  });
}

export function getAllProductIds() {
  const GET_PRODUCT_IDS = `SELECT id FROM products`;
  return db.query(GET_PRODUCT_IDS).then((data) => {
    // console.log("data", data.rows);
    // console.log("data rows", data.rows[0]);
    return data.rows;
  });
}

export function getProductData(id) {
  const GET_PRODUCT_DATA = `SELECT * FROM products WHERE id = ${id}`;

  return db.query(GET_PRODUCT_DATA).then((data) => {
    // console.log(data.rows[0]);
    return data.rows[0];
  });
}

export function addToBasket(quantity, size, id, productData) {
  const sid = crypto.randomBytes(18).toString("base64");
  const ADD_TO_BASKET = `INSERT INTO orders (quantity, size, product_id, product_data, sid) VALUES ($1, $2, $3, $4, $5) RETURNING sid`;
  return db
    .query(ADD_TO_BASKET, [quantity, size, id, productData, sid])
    .then(() => sid);
}

export function getOrderData(id) {
  const GET_PRODUCT_DATA = `SELECT * FROM orders WHERE id = ${id}`;

  return db.query(GET_PRODUCT_DATA).then((data) => {
    // console.log(data.rows[0]);
    return data.rows[0];
  });
}

export function getLastOrder() {
  const LAST_ORDER = `SELECT * FROM orders ORDER BY id DESC LIMIT 1;`;
  return db.query(LAST_ORDER).then((data) => {
    // console.log(data.rows[0]);
    return data.rows[0];
  });
}
