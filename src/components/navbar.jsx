import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, styled, Typography, TextField, Box, List, ListItem, ListItemText, Button } from "@mui/material";
import NightlifeSharpIcon from "@mui/icons-material/NightlifeSharp";
import searchSong from "./searchSong";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// primary color #303f9f

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if the user is logged in

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const track = await searchSong(e.target.value);
      setResults(track ? [track] : []);
    } else {
      setResults([]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    navigate("/logout"); // Redirect to logout page
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0094c6" }}>
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
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Homepage</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/player">Media Player</Button>
          {!token ? (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
              {/* <Button color="inherit" component={Link} to="/spotify-login">Spotify Login</Button> */}
            </>
          ) : (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          )}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
