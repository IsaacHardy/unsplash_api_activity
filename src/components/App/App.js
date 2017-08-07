import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPhotos, updateSearch} from '../../actions/unsplash.js';
import '../../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  updateSearch = (event) => {
    event.preventDefault();
    this.props.updateSearch(event.target.value);
  }

  searchPhotos = (event) => {
    event.preventDefault();
    this.props.getPhotos(this.props.search);
  }

  render() {
    let photos;
    if (!this.props.photos) {
      photos = '';
    } else {
      photos = this.props.photos.map((obj, index) => {
        return (
          <li key={index}><img src={obj.urls.small}/></li>
        );
      });
    }
    return (
      <div className="App">
        <form onSubmit={this.searchPhotos}>
            <div className="input-group">
                <input type="text" onChange={this.updateSearch} value={this.props.search}/>
                <button type="submit">Submit</button>
            </div>
        </form>
        {photos}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {photos: state.photos, search: state.search}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: (search) => dispatch(getPhotos(search)),
        updateSearch: (char) => dispatch(updateSearch(char))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
