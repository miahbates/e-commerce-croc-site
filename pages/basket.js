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
  const productData = JSON.parse(customerOrder.product_data);
  const price = parseInt(productData.price);
  const quantity = parseInt(customerOrder.quantity);
  const totalPrice = price * quantity;
  return (
    <div>
      <Layout>
        <main>
          <section className="basket">
            <h2> Basket</h2>
            <h3> Order Information </h3>
            <h4> {productData.title} </h4>
            <ul>
              <li>Size: {customerOrder.size}</li>
              <li>Quantity: {customerOrder.quantity}</li>
              <li>Price: £{productData.price} </li>
              <li>Total: £{totalPrice}</li>
              <img src={productData.img} />
            </ul>
          </section>
        </main>
      </Layout>
    </div>
  );
}
