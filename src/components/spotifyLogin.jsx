
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=c81b0d87410f47fcad9cbf1ff1690c4c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-playback-state%20user-modify-playback-state"


const spotifyLogin = () => {


  return(  <>

    <button id= "btn btn-success btn-lg" href= {AUTH_URL}>Login With Spotify</button>
      </>
      )
}


export default spotifyLogin