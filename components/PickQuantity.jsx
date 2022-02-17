export default function PickQuantity({ quantity, setQuantity }) {
  return (
    <div>
      <label htmlFor="product_quantity"> Quantity </label>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          return setQuantity(event.target.value);
        }}
        type="number"
        min="1"
        max="10"
        name="product_quantity"
        id="product_quantity"
      ></input>
    </div>
  );
}

//PLAN
// get rid of form tag in PickSize and PickQuantity
