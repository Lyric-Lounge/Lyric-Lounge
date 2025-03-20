import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { Box, Stack } from "@mui/material"
import Friendlist from './friendslist.jsx';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <main>
      <header>
      <h1>Welcome to the Lyric Lounge</h1>    
      </header>
      
      <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
        <h2>Home Page</h2>
      </Box>
      <div className="homeFriendsList"> 
      <Stack direction="row" spacing={2}>
      <Friendlist  />
      <Friendlist  />
      <Friendlist  />
      </Stack>
      </div>
   
      <section>
      </section>
    


      <footer>
        <h3>MEDIA PLAYER</h3>
      </footer>
    </main>

  );
};

export default Home;