import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let moviesJSX = movies.map(movie => 
    <div className="movie">
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
      </div>
  )
  

  return (
    <div>
      <h1>Movies Page</h1>
        {moviesJSX}
    </div>
  );
};

export default Movies;
