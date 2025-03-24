import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { Box, Stack } from "@mui/material"
import  Friendlist  from './friendslist.jsx';
import Friendlistabby from './abby.jsx';
import Friendlistsally from './sally.jsx';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <main>
      <header>
      <h1>Welcome to the Lyric Lounge</h1>    
      </header>
      
      <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      </Box>
      <div className="homeFriendsList"> 
      <Stack direction="row" spacing={2}>
      <Friendlist  />
      <Friendlistabby />
      <Friendlistsally />

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