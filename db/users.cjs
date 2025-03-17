const client = require('./client.cjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (userName, password, userEmail) => {

  const hashedPW = await bcrypt.hash(password, 10);
  
  const { rows } = await client.query(`
    INSERT INTO users (username, password, email)
    VALUES ('${userName}', '${hashedPW}', '${userEmail}')
    RETURNING * ;
    `);

    const createdUser = rows[0];
    if (createdUser) {
      const registerToken = await jwt.sign({id: createdUser.id}, process.env.SECRET);
      return registerToken;
    } else {
      throw new Error('Error created user.');
    }
}

const fetchUsers = async(userId) => {
  try {
    const {rows} = await client.query(`
      SELECT username FROM users WHERE id=${userId};
    `);
    return rows;
  } catch (error) {
    throw new Error('Bad Fetch')
  }
}

module.exports = {
  createUser,
  fetchUsers
}