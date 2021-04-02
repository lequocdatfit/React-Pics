import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(term) {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({
      images: response.data.results
    });
  }

  render() {
    return(
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;