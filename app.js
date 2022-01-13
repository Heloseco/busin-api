var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');


var errorHandler = require('./middlewares/errorHandler');
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var UserRouter = require('./routes/User');
var BusRouter = require('./routes/Bus');
var ScheduleRouter = require('./routes/Schedule');

var app = express();
app.use(cors());
app.use(passport.initialize());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/user', UserRouter);
app.use('/bus',BusRouter);
app.use('/schedule', ScheduleRouter);
app.use(errorHandler);

module.exports = app;
