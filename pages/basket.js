import Layout from "../components/layout";
import { getLastOrder } from "../src/database/model";

// Retrieves last order and returns it as props
export async function getServerSideProps() {
  const customerOrder = await getLastOrder();
  console.log("basket is", customerOrder);
  return {
    props: {
      customerOrder,
    },
  };
}

export default function Basket({ customerOrder }) {
  console.log("props", customerOrder);

  const basketItems = customerOrder.map((order) => {
    const productData = JSON.parse(order.product_data);
    const price = parseInt(productData.price);
    const quantity = parseInt(order.quantity);
    const totalPrice = price * quantity;
    return (
      <div key={order.id}>
        <h4 className="product-title"> {productData.title} </h4>
        <ul className="stack-sm">
          <li>Size: {customerOrder.size}</li>
          <li className="product-quantity">
            Quantity: {customerOrder.quantity}
          </li>
          <li className="product-price">Price: £{productData.price} </li>
          <li>Total: £{totalPrice}</li>
          <img src={productData.img} />
        </ul>
      </div>
    );
  });

  return (
    <div>
      <Layout>
        <main>
          <div className="product-wrapper">
            <section className="basket stack-sm">
              <h2> Basket</h2>
              <h3> Order Information </h3>
              {basketItems}
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
