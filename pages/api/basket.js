import { addToBasket } from "../../src/database/model.js";
import React from "react";

export default async function handler(req, res) {
  const order = req.body;
  console.log("order", order);
  const sid = await addToBasket(
    order.quantity,
    order.size,
    order.productData.id,
    order.productData
  );
  console.log("sid", sid);
  //make sure to set cookie before sending status
  res.setHeader("set-cookie", `sid=${sid}; HttpOnly; Path=/; Max-Age:600000`);
  res.status(200).json(order).redirect("../basket");
  // })
  // .catch((error) => console.log(error));
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
