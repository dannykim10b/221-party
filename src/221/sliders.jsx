import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import pingpongsound from '../audio/pingpong.wav'
import gabecoughsound from '../audio/gabecough.mp3'
import kaidencodsound from '../audio/kaidencod.mp3'
import johnpraisesound from '../audio/johnpraise.mp3'
import conversationsound from '../audio/conversation.mp3'

import "./221.css"

export default function SoundSliders() {
  const [pingpong, setPingpong] = useState(0)
  const [gabecough, setGabecough] = useState(0)
  const [kaidencod, setKaidencod] = useState(0)
  const [johnpraise, setJohnpraise] = useState(0)
  const [conversation, setConversation] = useState(0)


  useEffect(() => {
    document.getElementById("ppaudio").volume = pingpongvolume
    document.getElementById("gcaudio").volume = gabecoughvolume
    document.getElementById("kcaudio").volume = kaidencodvolume
    document.getElementById("jpaudio").volume = johnpraisevolume
    document.getElementById("convaudio").volume = conversationvolume
  })

  const pingpongvolume = (pingpong/100).toFixed(1)
  const gabecoughvolume = (gabecough/100).toFixed(1)
  const kaidencodvolume = (kaidencod/100).toFixed(1)
  const johnpraisevolume = (johnpraise/100).toFixed(1)
  const conversationvolume = (conversation/100).toFixed(1)

  return (
    <div className="inside221Container sliders">

      <audio id="ppaudio"  src={pingpongsound} autoPlay loop/>
      <audio id="gcaudio" src={gabecoughsound} autoPlay loop/>
      <audio id="kcaudio" src={kaidencodsound} autoPlay loop/>
      <audio id="jpaudio" src={johnpraisesound} autoPlay loop/>
      <audio id="convaudio" src={conversationsound} autoPlay loop/>

      <Grid container spacing={2} justify="space-around" alignItems="flex-end">

        <Typography id="continuous-slider" gutterBottom>
          Ping Pong
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider name="pingpong" value={pingpong} onChange={(e, newValue) => {setPingpong(newValue)}} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

        <Typography id="continuous-slider" gutterBottom>
          Gabe coughing
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider name="gabecough" value={gabecough} onChange={(e, newValue) => {setGabecough(newValue)}} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

        <Typography id="continuous-slider" gutterBottom>
          Kaiden playing COD
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider name="kaidencod" value={kaidencod} onChange={(e, newValue) => {setKaidencod(newValue)}} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

        <Typography id="continuous-slider" gutterBottom>
          John praising from the closet
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider name="johnpraise" value={johnpraise} onChange={(e, newValue) => {setJohnpraise(newValue)}} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

        <Typography id="continuous-slider" gutterBottom>
          Conversations
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider name="conversation" value={conversation} onChange={(e, newValue) => {setConversation(newValue)}} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}