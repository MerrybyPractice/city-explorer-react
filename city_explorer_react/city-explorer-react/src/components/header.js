import React, {Fragment, Component} from 'react';

export default class Header extends Component{
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