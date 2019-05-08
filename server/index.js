const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const session = require('express-session');
const passport = require('passport');
const path = require('path');

//*********************** Only For Session Authentication ***********************
// const MongoDBStore = require('connect-mongodb-session')(session);
//
// const store = new MongoDBStore({
//   uri: config.DB_URI,
//   collection: 'meetuperSessions'
// });
//
// store.on('error', (error) => console.log(error));

require('./models/meetups');
require('./models/users');
require('./models/threads');
require('./models/posts');
require('./models/categories');

require('./services/passport');

const meetupsRoutes = require('./routes/meetups');
const usersRoutes = require('./routes/users');
const threadsRoutes = require('./routes/threads');
const postsRoutes = require('./routes/posts');
const categoriesRoutes = require('./routes/categories');
const apiRoutes = require('./routes/api');

mongoose
  .connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.log(err));

const app = express();

// For Socket
// const server = require('http').createServer(app);
// const io = require('socket.io')(server, { pingTimeout: 60000 });
//
// require('./socket')(io);

app.use(bodyParser.json());

//*********************** Only For Session Authentication ***********************
// app.use(
//   session({
//     secret: config.SESSION_SECRET,
//     cookie: { maxAge: 3600000 },
//     resave: false,
//     saveUninitialized: false,
//     store
//   })
// );
//
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/v1', apiRoutes);
app.use('/api/v1/meetups', meetupsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/threads', threadsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

// if (process.env.NODE_ENV === 'production') {
//   const appPath = path.join(__dirname, '..', 'build');
//   app.use(express.static(appPath));
//
//   app.get('*', function(req, res) {
//     res.sendFile(path.resolve(appPath, 'index.html'));
//   });
// }
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('App is running on port: ' + PORT);
});
