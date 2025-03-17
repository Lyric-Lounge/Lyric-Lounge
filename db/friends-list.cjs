const client = require('./client.cjs');

const fetchFriends = async(userId) => {
  try {
    const {rows} = await client.query(`
      SELECT friend_id FROM friends_list WHERE users_id=${userId};
    `);
    return rows;
  } catch (error) {
    throw new Error('Bad Fetch')
  }
}

const createFriendsList = async (userId, friendId) => {
  try {
    await client.query(`
      INSERT INTO friends_list (users_id, friend_id)
      VALUES (${userId}, ${friendId});
    `);
    await client.query(`
      INSERT INTO friends_list (users_id, friend_id)
      VALUES (${friendId}, ${userId});
      `)
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createFriendsList,
  fetchFriends
}
