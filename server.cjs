const { createUser } = require('./db/users.cjs');
const { createUserSongs } = require('./db/user-songs.cjs');
const { createRecommendedSongs } = require('./db/recommended-songs.cjs');
const { createFriendsList } = require('./db/friends-list.cjs')

const client = require('./db/client.cjs');
client.connect();

const express = require('express');
const app = express();


const SpotifyWebApi = require('spotify-web-api-node');

app.use(express.json());
app.use(express.static('dist'));




app.post('/spotifylogin', (req, res, next) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http//loclathost:3000',
    clientId: 'c81b0d87410f47fcad9cbf1ff1690c4c',
    clientSecret: 'ea37d88e78e24deb9e4e280b04cad557'
  })
  spotifyApi.authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })
    })
    .catch(() => {
      res.sendStatus(400)
    })
  })

//get artist info
app.get(`/artists/{id}`, async (req, res, next) => {

  return //we dont know spotify answer yet
})

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