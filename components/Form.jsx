export default function Form({
  size,
  setSize,
  quantity,
  setQuantity,
  productData,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = { productData, quantity, size };
    // console.log(order);
    const res = await fetch("/api/basket", {
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    const result = await res.json();
    console.log(result);
    // result.user => 'Ada Lovelace'
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product_quantity"> Quantity </label>
      <input
        type="number"
        min="1"
        max="10"
        name="product_quantity"
        id="product_quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      ></input>

      <label htmlFor="product_size"> Size </label>
      <select
        id="product_size"
        name="product_size"
        form="pick-size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="small"> Small </option>
        <option value="medium"> Medium </option>
        <option value="large"> Large </option>
      </select>

      <button type="submit" id="add-basket">
        Add to Basket
      </button>
    </form>
  );
}
