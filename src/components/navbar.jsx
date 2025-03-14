import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/profile/:id'>Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/spotify-login">Spotify Login</Link>
      <Link to="/player">Player</Link>
    </nav>
  )
}
export default NavBar
