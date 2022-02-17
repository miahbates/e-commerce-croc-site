import { addToBasket } from "../../src/database/model.js";

export default function handler(req, res) {
  const order = req.body;
  // console.log(order);

  addToBasket(order.productData.id, order.size, order.quantity);

  res
    .status(200)
    .json(order)
    .then((order) => {
      addToBasket(order.productData.id, order.size, order.quantity);
      console.log("ORDER ADDED");
    });
  // console.log("ORDER DATA", order.productData.id);
}

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

// export default function HandleOrder(req, res) {
//   const order = req.body;
//   console.log(order);
//   const { id, quantity, size } = order;
//   addToBasket(order);
// }
