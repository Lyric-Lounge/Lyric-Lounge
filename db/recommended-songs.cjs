const client = require('./client.cjs');

const createRecommendedSongs = async (userId, songUrl) => {
  try {
    await client.query(`
      INSERT INTO recommended_songs (user_id, song_url)
      VALUES (${userId}, '${songUrl}');
    `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createRecommendedSongs
}