import {useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback";



const Player = (acessToken, trackUri) => { 
cosnt [ play, setPlay] = useState(false);

useEffect( ()=> {
 return setPlay(true)
}, [trackUri])
if (!accessToken) return null

  return (<SpotifyPlayer 
token = {accessToken}
showSaveIcon
callback={(state) => {
  if (!state.isPlaying) setPlay(false)
}}
play={play}
uris={trackUri ? [trackUri] : []}
/>
  )
}


export default Player