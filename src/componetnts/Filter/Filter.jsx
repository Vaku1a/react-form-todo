import css from "./Filter.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <>
      <p className={css.label}></p>
      <input
        type="text"
        placeholder="Filter tasks"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
}
