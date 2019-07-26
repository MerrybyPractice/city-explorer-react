import React from 'react';

export default props => (
  <>
  <h2> Business Reviews from Yelp </h2>
  <ul>
    {props.data.map( business=>(
      <li key={business.url}> {business.name} 
      {business.image_url} 
      {business.rating} 
      {business.url}
      </li>
    ))}
  </ul>
  </>
)