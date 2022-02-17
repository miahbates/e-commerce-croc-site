export default function PickQuantity({ quantity, setQuantity }) {
  return (
    <div>
      <form
        id="set-quantity"
        onChange={(event) => {
          event.preventDefault();
          console.log(event.target.value);
          return setQuantity(event.target.value);
        }}
      >
        <label htmlFor="product_quantity"> Quantity </label>
        <input
          type="number"
          min="1"
          max="10"
          name="product_quantity"
          id="product_quantity"
        ></input>
      </form>
    </div>
  );
}

//PLAN
// get rid of form tag in PickSize and PickQuantity
