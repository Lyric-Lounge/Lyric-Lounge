const client = require('./client.cjs');

const createUserSongs = async (userId, song1, song2, song3, song4, song5) => {
  try {
    await client.query(`
      INSERT INTO users_song (user_id, song_1, song_2, song_3, song_4, song_5)
      VALUES (${userId}, '${song1}', '${song2}', '${song3}', '${song4}', '${song5}');
    `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createUserSongs
}