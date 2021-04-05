import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filterOurBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
// import { filterBook } from '../filterBookCat';

const BooksList = props => {
  const { books, filtered } = props;

  const handleRemoveBook = book => {
    const { removeBook } = props;
    removeBook(book);
  };

  const handleFilterChange = category => {
    const { filter } = props;
    filter(category);
  };

  const filteredBooks = books.filter(book => (
    !!((filtered === null || filtered === book.category))));

  return (
    <div>
      <CategoryFilter handleFilter={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Option</th>
          </tr>
        </thead>
        {filteredBooks.map(book => <Book key={book.id} book={book} removeBtn={handleRemoveBook} />)}
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  filter: category => {
    dispatch(filterOurBook(category));
  },
});

BooksList.defaultProps = {
  filtered: null,
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  filtered: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
