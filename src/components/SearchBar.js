import React, { Component } from 'react'

class SearchBar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onInputClick(event) {
    console.log('You click the input');
  }

  render() {
    return(
      <div className="SearchBar ui segment">
        <form onSubmit={this.onInputSubmit} className="ui form">
          <div className="ui field">
            <label>Search image</label>
           <input 
              type="text"
              value={this.state.term}
              onClick={this.onInputClick} 
              onChange={e => this.setState({ term: e.target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;