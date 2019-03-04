const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');




const app = express();

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//mongodb
const dbURI = require('./config/keys').mongoURI;
mongoose.connect(dbURI,{ useNewUrlParser: true })
  .then(()=> console.log('Connected to mongoDB'))
  .catch(err => console.log('err'));

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

//routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = process.env.PORT || 4444;

app.listen(port, ()=>{
  console.log(`Server running in port ${port}`);
});