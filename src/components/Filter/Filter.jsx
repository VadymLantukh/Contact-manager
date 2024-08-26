import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filteres/selectors';
import { setFilter } from '../../redux/filteres/filtersSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.boxFilter}>
      <label className={css.labelFilter}>
        What name or namber to find?🧐
        <input
          className={css.inputFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
