const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const properties = require('./routes/api/properties')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
// DB Config
const db =require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//   Use Routes
app.use('/api/properties', properties)
app.use('/api/posts', posts)
app.use('/api/users', users)
app.use('/api/profile', profile)


app.listen(PORT, () => {
  console.log(`Seerver running on port ${PORT}`);
});

