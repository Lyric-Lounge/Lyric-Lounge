const client = require('./db/client.cjs');
client.connect();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('dist'));


//get artist info
app.get(`/artists/{id}`, async(req, res, next) => {

return //we dont know spotify answer yet
})

// assume the logInUser and registerUser functions are that name ( can be edited once functions are completed)
// login for our backend, assuming we have encryption set up w/ tokens
app.post('/api/login/:id', async(req, res, next) => {
 const { username, password } = req.body;
try{
  const userToken = await logInUser(username, password);
  res.send({userToken})
}catch(err) {
  res.send({message: ' Incorrect Username or Password'})
}
})

// register
app.post('/api/register',async(req, res, next) => {
  const{username, password, email} = req.body;
  try {
    const regUser = await registerUser(username, password, email);
    res.send(regUser);
  } catch (err) {
    res.send({message: `Bad Credentials`});
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});