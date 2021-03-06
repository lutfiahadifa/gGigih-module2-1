import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Playlist</h1>
      </header>
      <div className="Song-playlist">
        <img src={data.album.images[1].url} className="image-album"/>
        <p className='title'>Title : {data.name}</p>
        <p className='album'>album : {data.album.name}</p>
        <p className='artist'>Artist : {data.album.artists[0].name}</p>
        <button>Select</button>
      </div>
    </div>
  );
}

export default App;