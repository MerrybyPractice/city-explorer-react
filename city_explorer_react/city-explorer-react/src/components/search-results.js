import React, {Fragment, Component} from 'react';
import Trails from './trails.js'; 
import DarkSkyResults from './dark-sky-results.js'
import MovieDBResults from './movie-db-results.js'
import YelpResults from './yelp-results.js'
import EventBriteResults from './eventbrite-results.js'


//refactor for each API, ex, need a <Yelp>, <MovieDB>, <EventBrite>, ect.
export default class Result extends Component{
 
  render(){
    return(
      <Fragment>
       <Trails/>
        <DarkSkyResults/>
        <MovieDBResults/>
        <YelpResults/>
        <EventBriteResults/>
      </Fragment>
    )
  }

}