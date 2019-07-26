import React from 'react'; 

export default props => (
  
  <> 
  <h2> Weather </h2>
  <ul>
    {props.data.map(day=>(

      <li key={day.time}>{day.time} : {day.forecast}</li>
      
    ))}
  </ul>
  </>
)