import React, {Fragment, Component} from 'react';
//Yelp 
export default class YelpResults extends Component{
  constructor(props){
    super(props); 
    this.state = {
      image : props.image,
      price : props.price, 
      rating : props.rating, 
      url : props.url
    }
  }

  render(){
    return(
      <Fragment>
        <ul>this.image</ul>
        <ul>this.price</ul>
        <ul>this.rating</ul>
        <ul>this.url</ul>
      </Fragment>
    )
  }
}