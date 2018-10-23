const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')
const path = require('path')


const properties = require('./routes/api/properties')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const companies = require('./routes/api/companies')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db =require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

//  Passport Config
require('./config/passport')(passport);

//   Use Routes
app.use('/api/properties', properties)
app.use('/api/posts', posts)
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/companies', companies)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

