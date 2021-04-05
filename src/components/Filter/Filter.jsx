import style from './filter.module.css';
const Filter = ({ value, onChange }) => (
  <label className={style.filter}>
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
export default Filter;
