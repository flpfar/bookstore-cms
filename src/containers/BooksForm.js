import React from 'react';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <select>
            <option>category</option>
            <option>BOOK_CATEGORIES[0]</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default BooksForm;
