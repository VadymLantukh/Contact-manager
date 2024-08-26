import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filteres/selectors';
import { setFilter } from '../../redux/filteres/filtersSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <label>
        What name to find?
        <input
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
