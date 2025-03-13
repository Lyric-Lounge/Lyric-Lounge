import spotifyLogin from './components/spotifyLogin.jsx';
import Login from './components/login.jsx';
import Home from './components/home';
import Register from './components/register.jsx';
import NavBar from './components/navbar.jsx';
import Player from './components/Player.jsx';

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
    <h1>Lyric Lounge</h1>


    <spotifyLogin/>
    </>
  )
}

export default App
