import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }

componentDidMount() {
  // fetch('/api/songs')
  //   .then( res => res.json() )
  //   .then( songs => this.setState({ songs }) )
}

addSong = (name) => {
  const { songs } = this.state;
  const id = Math.floor(( 1 + Math.random ()) * 0x1000).toString()
  this.setState({ songs: [...songs, {id, name }]});
}

updateSong = (id) => {
  let songs = this.state.songs.map ( s => {
    if (s.id === id)
    return { ...s, complete: !s.complete }
    return s;
  });
  this.setState({ songs });
}

deleteSong = (id) => {
  const { songs } = this.state;
  this.setState({ songs: songs.filter( s => s.id !== id) })
}

render() {
  return (
    <div className="container">
    <SongForm addSong={this.addSong} />
    <SongList
      songs={this.state.songs}
      updateSong={this.updateSong}
      deleteSong={this.deleteSong}
      />
    </div>
  );
}

}


export default App;