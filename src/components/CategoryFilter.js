import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

const CategoryFilter = ({ changeFilter }) => {
const catSelect = React.useRef(null);
  return (
    <div>
      <select ref={catSelect} name="category" onChange={() => changeFilter(catSelect.current.value)}>
        {CATEGORIES.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;