import React from 'react';

function Book({ book, addToBasket }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '10px', 
      margin: '10px 0' 
    }}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
      <button onClick={() => addToBasket(book)}>Add to Basket</button>
    </div>
  );
}

export default Book;