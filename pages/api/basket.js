import { addToBasket } from "../../src/database/model.js";

export default function handler(req, res) {
  const order = req.body;
  console.log(order);

  addToBasket(
    order.quantity,
    order.size,
    order.productData.id,
    order.productData
  )
    .then((result) => {
      console.log(result);
      res.status(200).json(order);
    })
    .catch((error) => console.log(error));

  // res
  //   .status(200)
  //   .json(order)
  //   .then((order) => {
  //     // addToBasket(order.productData.id, order.size, order.quantity);
  //   });
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
