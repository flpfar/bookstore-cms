import React from 'react';
import { connect } from 'react-redux';

const BooksList = () => (
  <div>
    <table>
      <tr>
        <th>BookID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Things Fall Appart</td>
        <td>Literature</td>
      </tr>
    </table>
  </div>
);

const mapStateToProps = state => ({
  bookId: state.bookId,
  bookTitle: state.bookTitle,
  bookCategory: state.bookCategory,
});

const mapDispatchToProps = () => { };

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
