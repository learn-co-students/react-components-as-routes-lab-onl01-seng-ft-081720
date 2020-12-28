import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div>
          <p>Actor: {actor.name}</p>
          <ul>
            {actor.movies.map(movie => (<li>Movie: {movie}</li>))}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
