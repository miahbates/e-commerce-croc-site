import Layout from "../../components/layout";
import { getAllProductTitles } from "../../src/database/model";

// getAllProductTitles queries product titles from db and returns an array
// of objects.
// Titles array is an array of objects.
// Each object has a params key with a title associated.
// Entire function returns an object which has paths key and titlesArray
// as a value with a fallback.

export async function getStaticPaths() {
  const allTitles = await getAllProductTitles();
  console.log("function titles", getAllProductTitles());
  const titlesArray = allTitles.map((title) => {
    return { params: { title: title } };
  });
  return { paths: titlesArray, fallback: false };
}

// replaced with get staticPaths
// export async function getServerSideProps() {
//   console.log("all titles", allTitles);
//   return {
//     props: {
//       allTitles,
//     },
//   };
// }

// call layout component
export default function product() {
  return <Layout></Layout>;
}
