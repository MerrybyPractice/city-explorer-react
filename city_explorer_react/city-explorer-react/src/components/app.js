import React, {Fragment, Component} from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import SearchResults from './search-results.js'; 
import YelpResults from './yelp-results.js';
import MovieDBResults from './movie-db-results.js';
import DarkSkyResults from './dark-sky-results.js';
import EventBriteResults from './eventbrite-results.js'; 
import Trails from './trails.js';
import thisMap from './map.js';
import superagent from 'superagent';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      //needs to be dynamically returned from API
      location: {
        search_query : "urbana", 
        formatted_query : "Urbana, Illinois", 
        latitude: 40.1106,
        longitude: 88.2073
      }
    }
  }

  searchEntered = async query => {
    alert(query)
    //this is only a vauge estimation of the URL, I know it is not correct and currently does not work
    let data = await superagent.get('https://city-explorer-backend.herokuapp.com/locations?data={query}');

    //let latLong = data.body.results
  }

  render(){
    return(

      <Fragment>
      <Header/>
      <SearchForm handleSubmit={this.searchEntered}/>
      <thisMap/>
      <SearchResults>
        <YelpResults/>
        <MovieDBResults/>
        <DarkSkyResults/>
        <EventBriteResults/>
        <Trails/>
      </SearchResults>
      </Fragment>
  
    );

  }
}

export default App;
