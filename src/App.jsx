import SpotifyLogin from './components/spotifyLogin.jsx';
import Login from './components/login.jsx';
import Home from './components/home';
import Register from './components/register.jsx';
import NavBar from './components/navbar.jsx';
import SplashScreen from './components/SplashPage.jsx';
import Profile from './components/Profile.jsx';
/* import Player from './components/Player.jsx'; */

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <NavBar />
      
      <Routes>
        {/* Splash screen appears first and handles redirection */}
        <Route path="/" element={<SplashScreen />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/spotify-login" element={<SpotifyLogin />} />

        {/* Protected Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/player" element={<Player />} /> */}

        {/* Catch-all route to splash screen */}
        {/* <Route path="*" element={<SplashScreen />} /> */}
      </Routes>
    </>
  )
}

export default App
