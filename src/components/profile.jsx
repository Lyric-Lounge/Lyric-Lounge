import { useState } from "react";
import Button from '@mui/joy/Button';


const Profile = () => {
  const [topSongs, setTopSongs] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");
  const [username, setUsername] = useState("");

  const songList = ["Song 1", "Song 2", "Song 3", "Song 4"];

  const addTopSong = () => {
    if (selectedSong && !topSongs.includes(selectedSong)) {
      setTopSongs([...topSongs, selectedSong]);
    }
  };

  const addFriend = () => {
    if (username && !friends.includes(username)) {
      setFriends([...friends, username]);
      setUsername("");
    }
  };

  return (
    <section>
      <h2>Profile</h2>
      <h3>test123</h3>
      {/* Song Selector */}
      <article>
        <select value={selectedSong} onChange={(e) => setSelectedSong(e.target.value)}>
          <option value="">Select a song</option>
          {songList.map((song, index) => (
            <option key={index} value={song}>{song}</option>
          ))}
        </select>
     <Button
             variant="contained"
             type="submit"
             size="xsm"
             sx={{
               marginTop: 2,
               backgroundColor: '#0094c6', 
               color: '#000000',
               '&:hover': {
                 backgroundColor: '#349dfe', 
               },
             }}
             onClick={addTopSong}
          >
            Add to Top Songs
          </Button>
        {/* <button onClick={addTopSong}>Add to Top Songs</button> */}
      </article>

      {/* List of Top Songs */}
      <section className="homeFriendsList">
        <h3>Top Songs</h3>
        <ul>
          <li>Luther - Kendrik Lamar & SZA</li>
          <li>Die With A Smile - Lady Gaga & Bruno Mars</li>
          <li>Not Like Us - Kendrik Lamar</li>
          <li>A Bar Song - Shaboozey</li>
          <li>TV Off - Kendrik Lamar Featuring Lefty Gunplay</li>
        </ul>
      </section>

      {/* Friends Section */}
      <section>
        <h3>Friends List</h3>
        <ul>
          <li>Joey</li>
          <li>Sally</li>
          <li>Abby</li>
        </ul>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
             variant="contained"
             type="submit"
             size="xsm"
             font-color="white"
             sx={{
               marginTop: 2,
               backgroundColor: '#0094c6',
               color: '#000000', 
               '&:hover': {
                 backgroundColor: '#349dfe', 
               },
             }}
             onClick={addFriend}
          >
            Add Friend
          </Button>
      </section>

    </section>
  );
};

export default Profile;