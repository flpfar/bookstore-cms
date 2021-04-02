import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = props => {
  const { books } = props;

  const handleRemoveBook = book => {
    const { removeBook } = props;
    removeBook(book);
  };

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove Option</th>
      </tr>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} removeBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
