import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../src/database/model";

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

// gets the id we need from the url and calls getProductData to query database and retrievesthe data for the product with that id.
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
  return (
    <Layout>
      <p>hello!</p>
      {productData.id}
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
