const express = require('express');
const app = express(); // create app object
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users.js');
const tweets = require('./routes/api/tweets.js');

app.use(bodyParser.urlencoded({ extended: false })); // for id and password
app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/tweets', tweets);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

// app will be listening for incoming get request
app.get('/', (req, res) => {
  // debugger;
  res.send('Hello World!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));