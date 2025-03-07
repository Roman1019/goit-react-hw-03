export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <label htmlFor="">Find contact by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
