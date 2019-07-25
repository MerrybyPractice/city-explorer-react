import React, {Fragment, Component} from 'react';

//EventBrite
export default class EventBriteResults extends Component{
  constructor(props){
    super(props); 
    this.state = {
      link : props.link,
      name : props.name,
      summary : props.summary, 
      eventDate : props.eventDate 
    }
  }

  render(){
    return(
      <Fragment>
        <ul>{this.link}</ul>
        <ul>{this.name}</ul>
        <ul>{this.summary}</ul>
        <ul>{this.eventDate}</ul>
      </Fragment>
    )
  }
}