import React from 'react';
import Book from './Book';

function BookList({ books, addToBasket }) {
  return (
    <div>
      <h2>Books</h2>
      {books.map((book, index) => (
        <Book key={index} book={book} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default BookList;