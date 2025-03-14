import SpotifyLogin from './components/spotifyLogin.jsx';
import Login from './components/login.jsx';
import Home from './components/home';
import Register from './components/register.jsx';
import NavBar from './components/navbar.jsx';
/* import Player from './components/Player.jsx'; */

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <NavBar />
      <h1>Lyric Lounge</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/spotify-login" element={<SpotifyLogin />} />
{/*         <Route path="/player" element={<Player />} /> */}
      </Routes>
    </>
  )
}

export default App
