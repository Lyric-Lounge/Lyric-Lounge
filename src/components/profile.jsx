import { useState } from "react";
import Button from '@mui/joy/Button';
import { Box } from "@mui/material"



const Profile = () => {
  const [topSongs, setTopSongs] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");
  const [username, setUsername] = useState("");

  const songList = ["Gooey", "Pawn It All", "Infinite Bloom", "Instant Crush"];

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
    <section className="profilePage">
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

      <section className="profileTopSongs">
        <Box component="section" sx={{ p: 2, border: '1px solid #0094c6', width: 200 }}>
          <h3>Top Songs</h3>
          <ul class="mdc-list mdc-list--two-line">
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Luther</span>
                <span class="mdc-list-item__secondary-text">Kendrik Lamar & SZA</span>
              </span>
            </li>
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Die With A Smile</span>
                <span class="mdc-list-item__secondary-text">Lady Gaga & Bruno Mars</span>
              </span>
            </li>
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Not Like Us</span>
                <span class="mdc-list-item__secondary-text">Kendrik Lamar</span>
              </span>
            </li>
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">A Bar Song</span>
                <span class="mdc-list-item__secondary-text">Shaboozey</span>
              </span>
            </li>
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">TV Off</span>
                <span class="mdc-list-item__secondary-text">Kendrik Lamar Featuring Lefty Gunplay</span>
              </span>
            </li>
          </ul>
        </Box>
      </section>

      {/* Friends Section */}
      <section className="profileFriendsList">
        <Box component="section" sx={{ p: 2, border: '1px solid #0094c6', width: 200 }}>
          <h3>Friends List</h3>
          <ul class="mdc-list mdc-list--two-line">
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Joey</span>
              </span>
            </li>
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Sally</span>
              </span>
            </li>
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Abby</span>
              </span>
            </li>
          </ul>
        </Box>
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

    </section >
  );
};

export default Profile;