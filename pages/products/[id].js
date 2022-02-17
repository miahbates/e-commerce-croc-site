import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";
import PickSize from "../../components/PickSize";
import PickQuantity from "../../components/PickQuantity";
import Form from "../../components/Form";
import { getAllProductIds, getProductData } from "../../src/database/model";
import Link from "next/link";
import Basket from "../../components/Basket";

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

// async function postToBasket(data) {
//   await fetch("/api/basket", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }

// call layout component and render product page
export default function Product({ productData }) {
  const [size, setSize] = React.useState("small");
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Layout>
      <main>
        <div className="product-wrapper">
          <section className="croc-page">
            <div className="stack-sm">
              <h2 className="product-title">{productData.title} </h2>
              <p className="product-price">£{productData.price.toFixed(2)} </p>
            </div>

            <img src={productData.img} className="product-image" />
          </section>
          <Form
            size={size}
            setSize={setSize}
            quantity={quantity}
            setQuantity={setQuantity}
            productData={productData}
          />
        </div>
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
