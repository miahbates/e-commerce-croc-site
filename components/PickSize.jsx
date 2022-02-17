export default function PickSize({ size, setSize }) {
  return (
    <div>
      <form
        id="pick-size"
        onChange={(event) => {
          console.log(event.target.value);
          e.preventDefault();
          return setSize(event.target.value);
        }}
      >
        <label htmlFor="product_size"> Size </label>
        <select id="product_size" name="product_size" form="pick-size">
          <option value="small"> Small </option>
          <option value="medium"> Medium </option>
          <option value="large"> Large </option>
        </select>
      </form>
    </div>
  );
}
