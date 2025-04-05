import React from 'react';

function GenreSelector({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div>
      <h2>Select Genre</h2>
      {genres.map((genre) => (
        <button 
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          style={{ 
            marginRight: '10px', 
            fontWeight: selectedGenre === genre ? 'bold' : 'normal' 
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreSelector;