import { addToBasket } from "../../src/database/model.js";

export default function HandleOrder(req, res) {
  const order = req.body;
  console.log(order);
  const { id, quantity, size } = order;
  addToBasket(order);
}
