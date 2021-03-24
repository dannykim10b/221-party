import './App.css'
import React, {useState} from 'react';
import Door from './221/door'
import Darkmode from './221/darkmode'
import Inside221 from './221/inside221'


function App() {
  const [inside, setInside] = useState(false)

  const enterRoom = () => {
    setInside(!inside)
  }
  
  const insideRoom = () => {
    if(inside) {
      return <Inside221></Inside221>
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
