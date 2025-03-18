import { Link } from 'react-router-dom'
import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import NightlifeSharpIcon from '@mui/icons-material/NightlifeSharp';
// import Avatar from '@mui/joy/Avatar';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

// primary color #303f9f

const NavBar = () => {

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#303f9f' }}>
      <StyledToolbar>
        <NightlifeSharpIcon />
        <Typography varient="h6">Lyric Lounge</Typography>
      <Link to='/'>Homepage</Link>
      <Link to='/profile'>Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/spotify-login">Spotify Login</Link>

      </StyledToolbar>
    </AppBar>
  )
}
export default NavBar
