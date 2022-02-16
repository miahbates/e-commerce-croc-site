import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getProducts from "../src/database/model";

// Retrieves all products and returns it as props
export async function getServerSideProps() {
  const allProducts = await getProducts();
  return {
    props: {
      allProducts,
    },
  };
}

// Renders home and accepts props with parsedProducts key
export default function Home({ allProducts }) {
  return <div> {console.log(allProducts)}</div>;
}

// Retrieves all products and returns it as props
// export async function getServerSideProps() {
//   const allProducts = await getProducts();
//   const parsedProducts = JSON.stringify(allProducts);
//   return {
//     props: {
//       parsedProducts,
//     },
//   };
// }

// // Renders home and accepts props with parsedProducts key
// export default function Home({ parsedProducts }) {
//   const arrayProducts = JSON.parse(parsedProducts);
//   {
//     arrayProducts.map((product) => {
//       console.log(product.size);
//     });
//   }
//   return <div></div>;
// }
