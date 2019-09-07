import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: [{
        id: 1,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 2,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 3,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 4,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }],

      playlistName: "My Playlist",

      playlistTracks: [{
        id: 1,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 2,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 3,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 4,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults  result={this.state.searchResults} />
            <Playlist 
              tracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}  />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
