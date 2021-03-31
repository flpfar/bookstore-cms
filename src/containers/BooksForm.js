import React from 'react';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <h2>Title</h2>
    <input type="text" name="title" />
    <h2>Category</h2>
    <select name="category">
      {CATEGORIES.map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
