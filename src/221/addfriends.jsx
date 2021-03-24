import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./221.css";
import danny from '../img/dannycrop.jpg';
import gabe from '../img/gabecrop.jpg';
import john from '../img/Johncrop.jpg';
import kaiden from '../img/Kaidencrop.jpg';
import justin from '../img/justincorp.jpg';
import susan from '../img/Susancrop.jpg';
import kayoung from '../img/kayoungcrop.jpg';
import joice from '../img/joicecrop.jpg';
import hannah from '../img/Hannahcrop.jpg';
import annie from '../img/anniecrop.jpg'

export default function AddFriends() {
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

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.checked});
  };

  return (
    <>
    <div className="inside221Container add-friends">
    <FormControl component="fieldset">
      <FormLabel component="legend">Add Friends</FormLabel>
      <FormGroup row>
      <FormGroup>
        <FormControlLabel
          control={<Switch size="small" checked={state.danny} onChange={handleChange} name="danny" />}
          label="Danny"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.gabe} onChange={handleChange} name="gabe" />}
          label="Gabe"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.john} onChange={handleChange} name="john" />}
          label="John"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.kaiden} onChange={handleChange} name="kaiden" />}
          label="Kaiden"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.justin} onChange={handleChange} name="justin" />}
          label="Justin"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Switch size="small" checked={state.susan} onChange={handleChange} name="susan" />}
          label="Susan"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.kayoung} onChange={handleChange} name="kayoung" />}
          label="Kayoung"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.joice} onChange={handleChange} name="joice" />}
          label="Joice"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.hannah} onChange={handleChange} name="hannah" />}
          label="Hannah"
        />
        <FormControlLabel
          control={<Switch size="small" checked={state.annie} onChange={handleChange} name="annie" />}
          label="Annie"
        />
      </FormGroup>
      </FormGroup>
    </FormControl>
    </div>
    <div>
      {state.danny && <img class="friend danny" src={danny} width="75" height="75" alt="danny"/>}
      {state.gabe && <img class="friend gabe" src={gabe} width="75" height="75" alt="gabe"/>}
      {state.john && <img class="friend john" src={john} width="75" height="75" alt="john"/>}
      {state.kaiden && <img class="friend kaiden" src={kaiden} width="75" height="75" alt="kaiden"/>}
      {state.justin && <img class="friend justin" src={justin} width="75" height="75" alt="justin"/>}
      {state.susan && <img class="friend susan" src={susan} width="75" height="75" alt="susan"/>}
      {state.kayoung && <img class="friend kayoung" src={kayoung} width="75" height="75" alt="kayoung"/>}
      {state.joice && <img class="friend joice" src={joice} width="75" height="75" alt="joice"/>}
      {state.hannah && <img class="friend hannah" src={hannah} width="75" height="75" alt="hannah"/>}
      {state.annie && <img class="friend annie" src={annie} width="75" height="75" alt="annie"/>}
    </div>
    </>
  );
}