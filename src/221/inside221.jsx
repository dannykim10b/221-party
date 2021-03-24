import React, {useState} from 'react';
import SoundSliders from './sliders'
import AddFriends from './addfriends'
import Darkmode from './darkmode'
import room from '../img/221testbackgroundcropped.png'
import "./221.css"

export default function Inside221(props) {
    const [darkmode, setDarkmode] = useState(false)

    const toggleDarkmode = () => {
        setDarkmode(!darkmode)
      }

    return(
        <>
            <div className="inside221Container">
                <div className="inside221Container left-column">
                    <h1 className="inside221Container title">221 PARTY</h1>
                    <AddFriends></AddFriends>
                    <iframe className="inside221Container music-player" src="https://open.spotify.com/embed/playlist/4QFEs4By53kTqnZnRWAdbb" width="250" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="inside221Container middle-column">
                    <img className="inside221Container room-image" src={room}></img>
                </div>
                <div className="inside221Container right-column">
                    <SoundSliders></SoundSliders>
                    <iframe className="inside221Container music-player-mobile" src="https://open.spotify.com/embed/playlist/4QFEs4By53kTqnZnRWAdbb" width="250" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

                <Darkmode value={darkmode} onToggle={toggleDarkmode}></Darkmode>
            </div>
        </>
    )
}