import React, {Fragment, Component} from 'react';
import Header from './header.js'
import SearchForm from './search-form.js'
import SearchResults from './search-results.js' 
import thisMap from './map.js'

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

  searchEntered = query => {
    alert(query)
    //use query to hit API
  }

  render(){
    return(

      <Fragment>
      <Header/>
      <SearchForm handleSubmit={this.searchEntered}/>
      <thisMap/>
      <SearchResults/>
      <SearchResults/>
      <SearchResults/>
      <SearchResults/>
      <SearchResults/>
    </Fragment>
  
    );

  }
}

export default App;
