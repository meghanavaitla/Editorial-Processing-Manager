const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const app = express();
const middleware = require('./auth/auth.middlewares');
const auth = require('./auth/auth.routes');
const users = require('./api/users');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(middleware.checkTokenSetUser);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    user: req.user,
  });
});

app.use(
  '/forgotpassword',
  forgotPassword
);

app.use(
  '/auth',
  auth,
);

app.use(
  '/api/v1/notes',
  middleware.isLoggedIn,
  notes,
);

app.use(
  '/api/v1/profile',
  middleware.isLoggedIn,
  profiles,
);

app.use(
  '/api/v1/team',
  middleware.isLoggedIn,
  team,
);

app.use(
  '/api/v1/users',
  middleware.isLoggedIn,
  middleware.isAdmin,
  users,
);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${  req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

module.exports = app;
