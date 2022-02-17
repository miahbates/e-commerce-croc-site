export default function PickSize({ size, setSize }) {
  return (
    <div>
      <label htmlFor="product_size"> Size </label>
      <select
        onChange={(event) => {
          console.log(event.target.value);
          return setSize(event.target.value);
        }}
        id="product_size"
        name="product_size"
        form="pick-size"
      >
        <option value="small"> Small </option>
        <option value="medium"> Medium </option>
        <option value="large"> Large </option>
      </select>
    </div>
  );
}
