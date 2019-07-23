import React, {Fragment, Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props); 
    this.state = {
      header: "City Explorer", 
      paragraph: “Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!”,
    }
    // Should contain an <h1> with the title of your application (City Explorer).
    // Should contain a <p> with the following text: “Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!”
  }

  render(){
    return(
      <Fragment>
        <h1>{}</h1>
        <p>{}</p>

      </Fragment>
    )
  }

}

class Main extends Component{
  constructor(props){
    super(props); 
    this.state = {

    }
  }

//   Should contain the homepage markup and subsequent components. This includes the following:
// A search box and button for searching for a location
  //<Search>
//Should contain an <input> and a <button> element for searching for a location. This does not have to be wired to work yet - just the markup is required.
// A Google Maps placeholder
  //Should contain a Google Map placholder. This does not have to be wired up work yet - just the markup is required.
// 5 result boxes that will be used to house results our future API calls. You may use “lorem ipsum” text for now. Those APIs include: the Dark Sky API, Yelp API, Meetup API, MovieDB API, nd the Hiking Project API.
  //Should contain an <section> element with placeholder content that will be filled with real-time data later in the week. You may simply nest 5 <Result> components inside of <Main> for the time being. We will be recomposing this later in the week.

  render(){
    return(
      <Fragment>
        
      </Fragment>
    )
  }

}



function App() {
  <Fragment>

  </Fragment>
  
}

export default App;
