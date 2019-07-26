import React, {Fragment, Component} from 'react';

//Trails 

export default class Trails extends Component{
  constructor(props){
    super(props); 
    this.state = {
      name : props.name, 
      location : props.location, 
      length : props.length, 
      stars : props.stars, 
      starVotes : props.starVotes, 
      summary : props.summary, 
      trailURL : props.trailURL, 
      conditions : props.conditions, 
      conditionDate : props.conditionDate, 
      conditionTime : props.conditionTime
    }
  }

  render(){
    return(
      <Fragment>
        <ul>{this.name}</ul>
        <ul>{this.location}</ul>
        <ul>{this.length}</ul>
        <ul>{this.stars}</ul>
        <ul>{this.starVotes}</ul>
        <ul>{this.summary}</ul>
        <ul>{this.trailURL}</ul>
        <ul>{this.conditions}</ul>
        <ul>{this.conditionDate}</ul>
        <ul>{this.conditionTime}</ul>
      </Fragment>
    )
      
  }

}
