const client = require('./client.cjs');

const createFriendsList = async (userId, friednId) => {
  try {
    await client.query(`
      INSERT INTO friends_list (users_id, friend_id)
      VALUES (${userId}, ${friednId});
    `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createFriendsList
}