import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { Box, Stack } from "@mui/material"
import Friendlist from './friendslist.jsx';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <main>
      <header>
        <h2>Home Page</h2>
      </header>

      <Stack direction="row" spacing={2}>
      <Friendlist  />
      <Friendlist  />
      <Friendlist  />
      </Stack>

   
      <section>
    
        <button>Song Selector</button>
        <button>Select Friend</button>
      <button>Send Reccomendation</button>
      </section>
    


      <footer>
        <h3>MEDIA PLAYER</h3>
      </footer>
    </main>

  );
};

export default Home;