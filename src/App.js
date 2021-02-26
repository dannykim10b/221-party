import './App.css'
import SoundSliders from './221/sliders'
import AddFriends from './221/addfriends'
import React from 'react';
import MusicPlayer from './221/musicplayer'
import Door from './221/door'
import Darkmode from './221/darkmode'


function App() {
  const [inside, setInside] = React.useState(false)
  const [darkmode, setDarkmode] = React.useState(false)

  const enterRoom = () => {
    setInside(!inside)
  }

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }
  
  const insideRoom = () => {
    if(inside) {
      return <>
      <div className="bg-image">
        <div>
          <Darkmode value={darkmode} onToggle={toggleDarkmode}></Darkmode>
          <SoundSliders></SoundSliders>
          <AddFriends></AddFriends>
        </div>
        <div className="musicplayer">
          <iframe src="https://open.spotify.com/embed/playlist/4QFEs4By53kTqnZnRWAdbb" width="250" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
      </>
    } else {
      return <Door onKnock={enterRoom}></Door>
    }
  }

  return (
    <div className="App">
      {insideRoom()}
    </div>
  );
}

export default App;
