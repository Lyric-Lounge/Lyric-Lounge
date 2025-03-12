const client = require('./client.cjs');
const { createUser } = require('./users.cjs');
const { createUserSongs } = require('./user-songs.cjs');
const { createRecommendedSongs } = require('./recommended-songs.cjs');
const { createFriendsList } = require('./friends-list.cjs')


const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS friends_list;
      DROP TABLE IF EXISTS recommended_songs;
      DROP TABLE IF EXISTS users_song;
      DROP TABLE IF EXISTS users;
    `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR (30) UNIQUE NOT NULL,
        password VARCHAR (60) NOT NULL,
        email VARCHAR (60) UNIQUE NOT NULL
      );

      CREATE TABLE users_song (
        user_id BIGINT REFERENCES users(id),
        song_1 TEXT,
        song_2 TEXT,
        song_3 TEXT,
        song_4 TEXT,
        song_5 TEXT,
        null_song BIGINT
      );

      CREATE TABLE recommended_songs (
        user_id BIGINT UNIQUE NOT NULL REFERENCES users(id),
        song_url TEXT UNIQUE NOT NULL
      );

      CREATE TABLE friends_list (
        users_id BIGINT NOT NULL,
        friend_id BIGINT NOT NULL REFERENCES users(id)
      );
    `);
  } catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('connected');
  await dropTables();
  console.log('tables dropped');
  await createTables();
  console.log('tables created');
  console.log('creating users');
  await createUser('test123', '123', '123@gmail.com');
  await createUser('billybob', 'password', 'billy@gmail.com');
  await createUser('SallyQueen', 'S411Y', 'queenS@gmail.com');
  await createUser('Teddytwoshoes', 'T2S', 'teddytwoshoes@gmail.com');
  console.log('users created');
  console.log('creating user songs');
  await createUserSongs(1, 'Luther', 'Die With A Smile', 'Not Like Us', 'TV Off', 'A Bar Song');
  await createUserSongs(2, 'Beat it', 'Purple Rain', 'Bohemian Rhapsody' )
  console.log('user songs created');
  console.log('creating song recommendations');
  await createRecommendedSongs(1, 'https://www.billboard.com/charts/hot-100/?rank=6');
  console.log('song recommendations created');
  console.log('creating friends list');
  await createFriendsList(1, 2)
  await createFriendsList(2, 3)
  console.log('friends created')
}

syncAndSeed();