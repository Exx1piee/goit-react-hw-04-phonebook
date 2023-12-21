import css from './filter.module.css';
import PropTypes from 'prop-types';

export const ContactFilter = ({ filter, getFilter }) => {
  return (
    <div>
      <h3 className={css.subtitle}>Find contact by name</h3>
      <input
        name="filter"
        value={filter}
        className={css.filter}
        onChange={getFilter}
      ></input>
    </div>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string,
  getFilter: PropTypes.func,
};