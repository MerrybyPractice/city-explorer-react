import React, {Fragment} from 'react';
import Trails from './trails.js'; 
import DarkSkyResults from './dark-sky-results.js'
import MovieDBResults from './movie-db-results.js'
import YelpResults from './yelp-results.js'
import EventBriteResults from './eventbrite-results.js'


  export default props => {
    console.log(props.EventBriteResults)
    return(
      <Fragment>
        
       <Trails data = {props.Trails}/>
        <DarkSkyResults data = {props.DarkSkyResults} />
        <MovieDBResults data = {props.MovieDBResults}/>
        <YelpResults data = {props.YelpResults}/>
        <EventBriteResults data = {props.EventBriteResults}/>

      </Fragment>
    )
  }



