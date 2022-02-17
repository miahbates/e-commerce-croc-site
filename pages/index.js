import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getProducts } from "../src/database/model";
import Layout from "../components/layout";
import CategoryFilter from "../components/Category.filter";
import PriceFilter from "../components/price.filter";
import React from "react";

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
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(60);
  const [category, setCategory] = React.useState("all");

  console.log(allProducts[0].price);

  return (
    <div>
      <Layout home>
        <main>
          <section>
            <form className="filter-form">
              <PriceFilter
                min={min}
                setMin={setMin}
                max={max}
                setMax={setMax}
              />
              <CategoryFilter category={category} setCategory={setCategory} />
            </form>
          </section>

          <section className="products">
            <ul className="product-grid">
              {allProducts.length ? (
                allProducts
                  .filter((product) => {
                    if (category === "all") {
                      return true;
                    }
                    return product.type === category;
                  })
                  .filter(
                    (product) => product.price >= min && product.price <= max
                  )

                  .map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                      <a className="product-link">
                        <li className="product-card">
                          <img src={product.img} className="product-image" />
                          <div className="procuct-details stack-sm">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-color">
                              Colour:{product.color}
                            </p>
                            <p className="product-price">
                              Price: £{product.price.toFixed(2)}
                            </p>
                          </div>
                        </li>
                      </a>
                    </Link>
                  ))
              ) : (
                <li>No results found</li>
              )}
            </ul>
          </section>
        </main>
      </Layout>
    </div>
  );
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
