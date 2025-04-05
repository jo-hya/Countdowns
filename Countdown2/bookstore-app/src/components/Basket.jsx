import React from 'react';

function Basket({ basket }) {
  return (
    <div>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>No books in basket.</p>
      ) : (
        <ul>
          {basket.map((book, index) => (
            <li key={index}>
              {book.title} - ${book.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Basket;