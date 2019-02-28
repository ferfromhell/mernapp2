const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

//mongodb
const dbURI = require('./config/keys').mongoURI;
mongoose.connect(dbURI)
  .then(()=> console.log('Connected to mongoDB'))
  .catch(err => console.log('err'));


app.get('/', (req,res) => {
  res.send('I just came to say hello');
});

//routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = process.env.PORT || 4444;

app.listen(port, ()=>{
  console.log(`Server running in port ${port}`);
});