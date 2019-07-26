import React from 'react';

//MovieDB 
export default props => (
  <>
  <h2> Movies </h2>
  <ul>
    {props.data.map( movie => (
      <li key ={movie.image_url}> {movie.title} 
      {movie.image_url} 
      {movie.overview} 
      {movie.average_votes}
      {movie.total_votes} 
      {movie.popularity} 
      {movie.released_on}</li>
    )

    )}
  </ul>
  </>
)      