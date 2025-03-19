//import express from "express";
const fetch = require ('node-fetch');
// import dotenv from "dotenv";
// import open from "open";
// no

const { createUser, fetchUsers } = require('./db/users.cjs');
const { createUserSongs } = require('./db/user-songs.cjs');
const { createRecommendedSongs } = require('./db/recommended-songs.cjs');
const { createFriendsList, fetchFriends } = require('./db/friends-list.cjs')


const client = require('./db/client.cjs');
client.connect();

const express = require('express');
const app = express();

// Spotify credentials from .env file
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/callback";

let accessToken = ""; // Store the token here

app.use(express.json());
app.use(express.static('dist'));

//    GET REQUESTS    //
/* VVVVVVVVVVVVVVVVVVVVVV */
//get general

// Step 1: Redirect user to Spotify login
app.get("/login", (req, res) => {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=user-library-read playlist-read-private`;
  res.redirect(authUrl);
});

// Step 2: Handle Spotify callback and get access token
app.get("/callback", async (req, res) => {
  const code = req.query.code;
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = await response.json();
    accessToken = data.access_token; // Store token

    res.send("Authentication successful! You can now make API requests.");
  } catch (error) {
    console.error("Error getting access token:", error);
    res.status(500).send("Error retrieving token.");
  }
});



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
app.post('/api/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userToken = await logInUser(username, password);
    res.send({ token: userToken })
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
    res.send({ token: regUser });
  } catch (err) {
    res.send(err.message);
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});