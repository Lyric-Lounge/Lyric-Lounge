import { Link } from 'react-router-dom'
import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import NightlifeSharpIcon from '@mui/icons-material/NightlifeSharp';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})


const NavBar = () => {

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <NightlifeSharpIcon />
        <Typography varient="h6">Lyric Lounge</Typography>
      <Link to='/'>Homepage</Link>
      <Link to='/profile'>Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/spotify-login">Spotify Login</Link>
      <Link to="/player">Player</Link>
      </StyledToolbar>
    </AppBar>
  )
}
export default NavBar
