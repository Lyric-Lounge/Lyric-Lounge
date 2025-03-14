import { useState } from "react";

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

      {/* Song Selector */}
      <article>
        <select value={selectedSong} onChange={(e) => setSelectedSong(e.target.value)}>
          <option value="">Select a song</option>
          {songList.map((song, index) => (
            <option key={index} value={song}>{song}</option>
          ))}
        </select>
        <button onClick={addTopSong}>Add to Top Songs</button>
      </article>

      {/* List of Top Songs */}
      <section>
        <h3>Top Songs</h3>
        <ul>
          {topSongs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </section>

      {/* Friends Section */}
      <section>
        <h3>Friends List</h3>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={addFriend}>Add Friend</button>
      </section>

    </section>
  );
};

export default Profile;