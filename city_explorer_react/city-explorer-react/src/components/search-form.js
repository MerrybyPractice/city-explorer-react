import React, {Fragment, Component} from 'react';

export default class SearchForm extends Component{

  constructor(props){
    super(props); 
    this.state = {
      query: '',
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault(); 
    this.props.handleSubmit(this.state.query)
  }

  render(){
    return(
      
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.query} onChange={this.handleChange}></input>
        <button> Search </button>
        </form>
      
    )
  }
}