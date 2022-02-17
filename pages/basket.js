import Layout from "../components/layout";
import { getLastOrder } from "../src/database/model";

// Retrieves last order and returns it as props
export async function getServerSideProps() {
  const customerOrder = await getLastOrder();
  return {
    props: {
      customerOrder,
    },
  };
}

export default function Basket({ customerOrder }) {
  console.log(customerOrder);
  return (
    <div>
      <Layout>
        <main>
          <section className="basket">
            <h2> Basket</h2>
            <h3> Order Information </h3>
            <ul>
              <li>Size: {customerOrder.size}</li>
              <li>Quantity: {customerOrder.quantity}</li>
            </ul>
          </section>
        </main>
      </Layout>
    </div>
  );
}
