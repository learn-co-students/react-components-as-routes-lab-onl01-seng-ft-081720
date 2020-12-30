import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
  // let directorsJSX = directors.map(director => 
  //     <div className="director">{director.name}</div>
  //   )

    let directorsJSX = directors.map(director => 
      <div className="director">
        <h2>Name: {director.name}</h2>
        {director.movies.map(movie => <li>{movie}</li>)}
        </div>
    )
  
  return (
    <div>

    <h1>Directors Page</h1>
    {directorsJSX}
    </div>
    
      // directorsJSX
   
  );
}

export default Directors
