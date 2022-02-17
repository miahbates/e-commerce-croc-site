import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";
import PickSize from "../../components/PickSize";
import PickQuantity from "../../components/PickQuantity";

import { getAllProductIds, getProductData } from "../../src/database/model";
// import HandleOrder from "../api/basket";
//import HandleOrder from "../api/basket";

// getAllProductIds queries product ids from db and returns an array
// of objects.
// idsArray is an array of objects.
// Each object has a params key with an id associated.
// Entire function returns an object which has paths key and idsArray
// as a value with a fallback.

export async function getStaticPaths() {
  const allIds = await getAllProductIds();
  // console.log("function titles", getAllProductTitles());
  const idsArray = allIds.map((item) => {
    // console.log("ID", id);
    return { params: { id: item.id.toString() } };
  });
  // console.log("IDs array", idsArray);
  return { paths: idsArray, fallback: false };
}

// gets the id we need from the url and calls getProductData to query database and retrieves
// the data for the product with that id.
export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

// call layout component and render product page
export default function Product({ productData }) {
  const [size, setSize] = React.useState("small");
  const [quantity, setQuantity] = React.useState(1);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const order = { productData, size, quantity };
  //   console.log("order", order);

  // fetch("/api/basket", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(order),
  // }).then((data) => {
  //   console.log(data);
  //   console.log("new order added");
  // });
  // };

  return (
    <Layout>
      <main>
        <section className="croc-page">
          <h2>{productData.title} </h2>
          <p>£{productData.price} </p>
          <img src={productData.img} />
        </section>
        <form id="pick-size">
          <PickSize size={size} setSize={setSize}></PickSize>
          <PickQuantity
            quantity={quantity}
            setQuantity={setQuantity}
          ></PickQuantity>

          <button type="submit" id="add-basket">
            Add to Basket
          </button>
          <p>{quantity}</p>
          <p>{size}</p>
        </form>
      </main>
    </Layout>
  );
}

// IDs array

// IDs array [
//   { params: { id: '1' } },
//   { params: { id: '2' } },
//   { params: { id: '3' } },
//   { params: { id: '4' } },
//   { params: { id: '5' } },
//   { params: { id: '6' } }
// ]
