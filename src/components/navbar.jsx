import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/profile/:id'>Profile</Link>
    </nav>
  )
}
export default NavBar
