import React, {Fragment, Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props); 
    this.state = {
      header: "City Explorer", 
      paragraph: "Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!",
    }
  }

  render(){
    return(
      <Fragment>
        <h1>{this.header}</h1>
        <p>{this.paragraph}</p>

      </Fragment>
    )
  }

}

class Search extends Component{
  constructor(props){
    super(props); 
    this.state = {
      button: "Search"
    }
  }

  render(){
    return(
      <Fragment>
        <input></input>
        <button> {this.button} </button>
        
      </Fragment>
    )
  }
}

class Result extends Component{
  constructor(props){
    super(props); 
    this.state = {
      text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dui eu augue scelerisque posuere. Aliquam rutrum lorem at magna lacinia, eu vestibulum arcu tempus. Etiam vestibulum nisi eu neque commodo elementum. Etiam eget ex ac nulla volutpat tincidunt. Mauris placerat odio quis felis vulputate ultricies eu quis mauris. Suspendisse sagittis neque quis neque imperdiet, nec luctus metus varius. Sed dapibus neque nec tortor hendrerit, ac vestibulum dolor consequat. Integer nec velit congue, euismod arcu non, sodales ipsum. Pellentesque vestibulum dolor in nisi malesuada auctor. Proin ac enim at sem ullamcorper lobortis. Sed eget nunc porttitor, mollis diam in, interdum sem. Sed rhoncus nibh nec turpis pellentesque vehicula. Donec non mauris nec ante sagittis interdum quis sollicitudin libero. Ut mollis velit lobortis libero luctus vulputate. Curabitur rhoncus erat non turpis placerat, sit amet molestie ligula placerat. Phasellus nec dui vitae velit dictum porttitor. Praesent blandit elit ut venenatis placerat. Vivamus vitae est tempus, aliquam leo et, ultrices lorem.",

    }
  }
  render(){
    return(
      <Fragment>
        <section>{this.text}</section>
      </Fragment>
    )
  }

}

class Map extends Component{
  constructor(props){
    super(props); 
    this.state = {
      

    }
  }

  render(){
    return(
      <section></section>
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

// A Google Maps placeholder
  //Should contain a Google Map placholder. This does not have to be wired up work yet - just the markup is required.


  render(){
    return(
      <Fragment>
        <Search/>
        <Map/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </Fragment>
    )
  }

}



function App() {
  render(){ 
    return(
  <Fragment>
    <Header/>
  </Fragment>
    );

  }
  
  
}

export default App;
