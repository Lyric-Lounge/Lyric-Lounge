import { useState } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, styled, Typography, TextField, Box, List, ListItem, ListItemText } from "@mui/material";
import NightlifeSharpIcon from '@mui/icons-material/NightlifeSharp';
import searchSong from './searchSong'
// import Avatar from '@mui/joy/Avatar';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

// primary color #303f9f

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const track = await searchSong(e.target.value);
      setResults(track ? [track] : []);
    } else {
      setResults([]);
    }
  };
  
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#303f9f", padding: "10px" }}>
      <StyledToolbar>
        <NightlifeSharpIcon />
        <Typography variant="h6">Lyric Lounge</Typography>
        
        {/* Search Bar */}
        <Box sx={{ position: "relative", flexGrow: 1, mx: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a song..."
            value={query}
            onChange={handleSearch}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          {results.length > 0 && (
            <List sx={{ position: "absolute", top: "100%", left: 0, right: 0, bgcolor: "white", boxShadow: 3 }}>
              {results.map((track, index) => (
                <ListItem button key={index} component="a" href={track.spotifyUrl} target="_blank">
                  <ListItemText primary={track.name} secondary={track.artist} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {/* Navigation Links */}
        <Box>
          <Link to="/">Homepage</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/spotify-login">Spotify Login</Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}
export default NavBar
