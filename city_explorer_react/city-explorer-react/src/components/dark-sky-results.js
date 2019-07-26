import React from 'react'; 

export default props => (
  
  <> 
  <h2> Weather </h2>
  <ul>
    {props.data.map(day=>(

      <li>{day.time} : {day.forecast}</li>
      
    ))}
  </ul>
  </>
)