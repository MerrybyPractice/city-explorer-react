import React, {Fragment, Component} from 'react';
//DarkSky
export default class DarkSkyResults extends Component{
  constructor(props){
    super(props); 
    this.state = {
      forecast : props.forecast, 
      time : props.time
    }
  }

  render(){
    return(
      <Fragment>
        <ul>{this.forecast}</ul>
        <ul>{this.time}</ul>
      </Fragment>
    )
  }

}