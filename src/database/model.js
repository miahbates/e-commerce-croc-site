import db from "./connection.js";

export function getProducts() {
  const GET_PRODUCTS = `SELECT * FROM products`;
  return db.query(GET_PRODUCTS).then((data) => {
    // console.log("data", data.rows);
    // console.log("data rows", data.rows[0]);
    return data.rows;
  });
}

export function getAllProductTitles() {
  const GET_PRODUCT_TITLES = `SELECT title FROM products`;
  return db.query(GET_PRODUCT_TITLES).then((data) => {
    console.log("data", data.rows);
    // console.log("data rows", data.rows[0]);
    return data.rows;
  });
}
