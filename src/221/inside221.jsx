import React, {useState} from 'react';
import SoundSliders from './sliders'
import AddFriends from './addfriends'
import Darkmode from './darkmode'
import room from '../img/221testbackgroundcropped.png'
import "./221.css"
import danny from '../img/dannycrop.png';
import gabe from '../img/gabecrop.png';
import john from '../img/johncrop.png';
import kaiden from '../img/kaidencrop.png';
import justin from '../img/justincrop.png';
import susan from '../img/susancrop.png';
import kayoung from '../img/kayoungcrop.png';
import joice from '../img/joicecrop.png';
import hannah from '../img/hannahcrop.png';
import annie from '../img/anniecrop.png'

export default function Inside221(props) {
    const [darkmode, setDarkmode] = useState(false)
    const [state, setState] = useState({
        danny: false,
        gabe: false,
        john: false,
        kaiden: false,
        justin: false,
        susan: false,
        kayoung: false,
        joice: false,
        hannah: false,
        annie: false,
    });

    const toggleFriends = (e) => {
        setState({...state, [e.target.name]: e.target.checked});
      };

    const toggleDarkmode = () => {
        setDarkmode(!darkmode)
      }

    return(
        <>
            <div className="inside221Container">
                <div className="inside221Container left-column">
                    <h1 className="inside221Container title">221 PARTY</h1>
                    <AddFriends toggleFriends={toggleFriends}></AddFriends>
                    <iframe className="inside221Container music-player" src="https://open.spotify.com/embed/playlist/4QFEs4By53kTqnZnRWAdbb" width="250" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="inside221Container middle-column">
                    <img className="inside221Container room-image" src={room}></img>
                    {state.danny && <img class="inside221Container friend" src={danny} alt="danny"/>}
                    {state.gabe && <img class="inside221Container friend" src={gabe} alt="gabe"/>}
                    {state.john && <img class="inside221Container friend" src={john} alt="john"/>}
                    {state.kaiden && <img class="inside221Container friend" src={kaiden} alt="kaiden"/>}
                    {state.justin && <img class="inside221Container friend" src={justin} alt="justin"/>}
                    {state.susan && <img class="inside221Container friend" src={susan} alt="susan"/>}
                    {state.kayoung && <img class="inside221Container friend" src={kayoung} alt="kayoung"/>}
                    {state.joice && <img class="inside221Container friend" src={joice} alt="joice"/>}
                    {state.hannah && <img class="inside221Container friend" src={hannah} alt="hannah"/>}
                    {state.annie && <img class="inside221Container friend" src={annie} alt="annie"/>}
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