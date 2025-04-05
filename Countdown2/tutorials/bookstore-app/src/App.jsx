import React, { useState } from 'react'
import GenreSelector from './components/GenreSelector'
import BookList from './components/BookList'
import Basket from './components/Basket'

const bookData = {
  "fiction": [
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"title": "1984", "author": "George Orwell", "price": 8.50},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
  ],
  "non-fiction": [
    {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
    {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
    {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
  ],
  "children": [
    {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
    {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
    {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
  ]
};

function App() {
  const genres = Object.keys(bookData);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [basket, setBasket] = useState([]);

  const addToBasket = (book) => {
    setBasket([...basket, book]);
  };

  return (
    <div className="App">
      <h1>Bookstore App</h1>
      <GenreSelector 
        genres={genres} 
        selectedGenre={selectedGenre} 
        setSelectedGenre={setSelectedGenre} 
      />
      <BookList 
        books={bookData[selectedGenre]} 
        addToBasket={addToBasket} 
      />
      <Basket basket={basket} />
    </div>
  );
}

export default App;