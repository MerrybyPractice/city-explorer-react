import React from 'react';
   
export default props => (
  <> 
  <h2> Trails </h2>
  <ul>
    {props.data.map(trail=>(
      <li key={trail.traiUrl}>
      {trail.name} 
      location: {trail.location}
      length: {trail.length}
      {trail.stars} out of {trail.star_votes}
      {trail.summary} 
      conditions: {trail.conditions}
      {trail.condition_date} : {trail.condition_time} 
      {trail.trail_url}
      </li>
      

    ))}
  </ul>
  </> 
)
