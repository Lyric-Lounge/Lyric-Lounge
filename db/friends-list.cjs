const client = require('./client.cjs');

const createFriendsList = async (userId, friendId) => {
  try {
    await client.query(`
      INSERT INTO friends_list (users_id, friend_id)
      VALUES (${userId}, ${friendId});
    `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createFriendsList
}
