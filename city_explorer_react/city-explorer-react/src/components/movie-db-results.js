import React, {Fragment, Component} from 'react';

//MovieDB 
export default class MovieDBResults extends Component{
  constructor(props){
    super(props); 
    this.state = {
      title : props.title, 
      overview : props.overview, 
      averageVotes : props.averageVotes, 
      totalVotes : props.totalVotes, 
      image : props.image, 
      popularity : props.popularity, 
      releasedOn : props.releasedOn
    }
  }

  render(){
    return(
      <Fragment>
        <ul>{this.title}</ul>
        <ul>{this.overview}</ul>
        <ul>{this.averageVotes}</ul>
        <ul>{this.totalVotes}</ul>
        <ul>{this.image}</ul>
        <ul>{this.popularity}</ul>
        <ul>{this.releasedOn}</ul>
      </Fragment>
    )
  }

}