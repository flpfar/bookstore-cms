import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tbody>
      {books.map(book => (
        <Book key={book.id} book={book} removeBook={removeBook} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  }
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
