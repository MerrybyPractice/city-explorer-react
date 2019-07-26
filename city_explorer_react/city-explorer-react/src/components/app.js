import React, {Fragment, Component} from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import SearchResults from './search-results.js'; 
import ThisMap from './map.js';
import superagent from 'superagent';
//import DarkSkyResults from './dark-sky-results.js';
//import MovieDBResults from './movie-db-results.js';
//import EventBriteResults from './eventbrite-results.js';
//import YelpResults from './yelp-results.js';
//import Trails from './trails.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      location : null, 
      DarkSkyResults : [],
      MovieDBResults : [], 
      EventBriteResults : [], 
      YelpResults : [], 
      Trails : [],
      }
    }
  
  searchEntered = async query => {
    
    const url = 'https://jb-flask-hello-world.onrender.com';

    const locationData = await superagent.get(`${url}/location?data=${query}`);

    const location = {
      search_query : locationData.body.search_query, 
      formatted_query : locationData.body.formatted_query, 
      latitude: locationData.body.latitude,
      longitude: locationData.body.longitude,

  
  }

  console.log(location)  
  
  const queryString = `data[formatted_query]=${location.formatted_query}&data[latitude]=${location.latitude}&data[longitude]=${location.longitude}&data[search_query]=${location.search_query}`

  const DarkSkyResultsUrl = `${url}/weather?${queryString}`

  const DarkSkyResultsResponse = await superagent.get(DarkSkyResultsUrl)

  const MovieDBResultsUrl = `${url}/movies?${queryString}`

  const MovieDBResultsResponse = await superagent.get(MovieDBResultsUrl)

  const EventBriteResultsUrl = `${url}/events?${queryString}`

  const EventBriteResultsResponse = await superagent.get(EventBriteResultsUrl)

  const YelpResultsUrl = `${url}/yelp?${queryString}`

  const YelpResultsResponse = await superagent.get(YelpResultsUrl)


  const TrailsUrl = `${url}/trails?${queryString}`

  const TrailsResponse = await superagent.get(TrailsUrl)

  this.setState({
    location,
    DarkSkyResults : DarkSkyResultsResponse,
    MovieDBResults : MovieDBResultsResponse,
    EventBriteResults : EventBriteResultsResponse, 
    YelpResults : YelpResultsResponse, 
    Trails : TrailsResponse
    
  })

  }

  render() { 
    return(
      <Fragment>
      <Header/>
      <SearchForm handleSubmit={this.searchEntered}/>
      {this.state.location && (
        <>
        <ThisMap/> latitude={this.state.location.latitude} longitude={this.state.location.longitude}/>
        <SearchResults DarkSkyResults={this.state.DarkSkyResults.body} MovieDBResults={this.state.MovieDBResults.body} EventBriteResults={this.state.EventBriteResults.body} Trails = {this.state.Trails.body} YelpResults={this.state.YelpResults.body}/>
        </>
       )} 
      </Fragment>
  
    );
      
  }
}

export default App;
