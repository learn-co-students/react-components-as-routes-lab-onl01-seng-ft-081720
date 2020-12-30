import React from 'react';
import { actors } from '../data';





const Actors = () => {
  // let actorsMoviesToJSX = actors.map(actor => <li>{actor.movies}</li>)
  let actorsJSX = actors.map(actor => 
      <div className="actor">
        <h2>Name: {actor.name}</h2>
        <ul>

        {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
        </div>
    )
  return (
    <div>
      <h1>Actors Page</h1>

    {actorsJSX}
    {/* <ul>Movies:
      {actorsMoviesToJSX}
    </ul> */}
    </div>

  );
};

export default Actors;
