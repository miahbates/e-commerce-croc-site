import db from "./connection.js";

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
