const { createUser, fetchUsers } = require('./db/users.cjs');
const { createUserSongs } = require('./db/user-songs.cjs');
const { createRecommendedSongs } = require('./db/recommended-songs.cjs');
const { createFriendsList, fetchFriends } = require('./db/friends-list.cjs')

const client = require('./db/client.cjs');
client.connect();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('dist'));

//    GET REQUESTS    //
/* VVVVVVVVVVVVVVVVVVVVVV */
//get general
app.get('/', (req, res) => {
  res.send('Welcome to The Lyric Lounge!');
})

//get the ids of the selected user's friends
app.get('/api/friends/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const friends = await fetchFriends(id)
    if (friends === undefined) {
      res.send('Friends not Found');
    } else {
      res.send(friends);
    }
  } catch (err) {
    res.send(err.message);
  }
})

//get users by id
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await fetchUsers(id)
    if (user === undefined) {
      res.send('User not Found');
    } else {
      res.send(user)
    }
  } catch (err) {
    res.send(err.messgae);
  }
})


//get artist info
app.get(`/artists/{id}`, async (req, res, next) => {

  return //we dont know spotify answer yet
})






//    POST REQUESTS   //
/* VVVVVVVVVVVVVVVVVVVV*/
// assume the logInUser and createUser functions are that name ( can be edited once functions are completed)


// login for our backend, assuming we have encryption set up w/ tokens
app.post('/api/login/:id', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userToken = await logInUser(username, password);
    res.send({ userToken })
  } catch (err) {
    res.send({ message: ' Incorrect Username or Password' })
  }
})

//createUserSongs (Spotify API needed)
//createRecommendedSongs (Spotify API needed)
//createFriendsList
app.post('/api/friends', async (req, res, next) => {

  try {
    const { usersId, friendId } = req.body
    const newFriend = await createFriendsList(usersId, friendId);
    res.send(newFriend);
  } catch (err) {
    res.send(err.message);
  }
});

// createUser
app.post('/api/register', async (req, res, next) => {

  try {
    const { username, password, email } = req.body;
    const regUser = await createUser(username, password, email);
    res.send(regUser);
  } catch (err) {
    res.send(err.message);
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});