const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const bcrypt       = require('bcrypt');
const passport     = require('passport');
const session      = require('passport-session');
{viewrequire}{dbrequire}


{dbconnect}
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '{views}');

// default value for title local
app.locals.title = 'Express - Generated with ArtGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());{css}
app.use(express.static(path.join(__dirname, 'public')));{viewmiddleware}
// app.use(session({
//   // Change to create unique access key as a secret string
//   secret: '',
//   // These two options are to prevent warnings
//   resave: true,
//   saveUninitialized: true
// }) );
//---------HERE GO ALL THE ROUTES-------------------
const index = require('./routes/index');
app.use('/', index);

// -------------------------------------------------
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
