import css from './filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.label}>
      <label>Find contacts my name</label>
      <input
      className={css.input}
        name="title"
        type="text"
        value={filter}
        onChange={onChange}        
      />
    </div>
  );
};

export default Filter;
