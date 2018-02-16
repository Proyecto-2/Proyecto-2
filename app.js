require('dotenv').config();
var cartId;
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
const passportConfig = require('./passport');
const LocalStrategy = require("passport-local").Strategy;

const localDB = "mongodb://localhost/project2";
const onlineDB = process.env.dbURL;

mongoose.connect(onlineDB).then(() => console.log(`conectado a ${process.env.dbURL}`));

const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');
const pages = require('./routes/pages');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', "layouts/main-layout");
app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));
passportConfig(app);

app.use(flash());

app.use((req, res, next)=>{
  res.locals.user = req.user;
  res.locals.messages = req.flash('info');
  next();
})

app.use('/', index);
app.use('/users', users);
app.use('/', auth);

//Al poner /tipo > pages indicamos que al poner la barra, vaya a pages.js
//De ahí, se va distribuyendo al resto de webs
app.use('/', pages);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;