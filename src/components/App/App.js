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
        id: 5,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 6,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 7,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }, {
        id: 8,
        name: 'We Dont talk anymore',
        artist: 'Charlie Puth',
        album: 'none'
      }]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack = (track) => {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    var tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    })
  }

  removeTrack = (track) => {
    let tracks = this.state.playlistTracks.filter(playlisttrack => playlisttrack.id !== track.id);
    this.setState({
      playlistTracks: tracks
    })
  }

  updatePlaylistName = (name) => {
    this.setState({
      playlistName: name
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div className="App-playlist">

            <SearchResults  
              result={this.state.searchResults}
              onAdd={this.addTrack} />

            <Playlist 
              tracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}  />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
