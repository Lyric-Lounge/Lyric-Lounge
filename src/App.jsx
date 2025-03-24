import { Routes, Route } from "react-router-dom";
import SpotifyLogin from './components/spotifyLogin.jsx';
import Login from './components/login.jsx';
import Home from './components/home';
import Register from './components/register.jsx';
import NavBar from './components/navbar.jsx';
import SplashScreen from './components/SplashPage.jsx';
import Profile from './components/profile.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import Logout from "./components/Logout.jsx";
import AudioPlayer from "./components/Player.jsx";

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
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/player" element={<ProtectedRoute element={<AudioPlayer />} />} />

        {/* Logout Route */}
        <Route path="/logout" element={<Logout />} />

        {/* Catch-all route to splash screen */}
        <Route path="*" element={<SplashScreen />} />
      </Routes>
    </>
  )
}

export default App;
