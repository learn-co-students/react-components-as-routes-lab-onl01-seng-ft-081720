import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => 
        <div key={movie.name}>
          {movie.title}<br></br>
          {movie.time}
          <ul>
            {movie.genres.map(genre => 
              <li key={genre}>{genre}</li>
            )}
          </ul>
        </div>
        )}
    </div>
  );
};

export default Movies;
