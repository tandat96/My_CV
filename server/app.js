var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


const session = require('express-session')
const dbConnection = require('./models/databases')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const bodyParser = require('body-parser')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CV', {useNewUrlParser: true});



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
)

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport
app.use(passport.initialize())
app.use(passport.session())
//123


app.use('/', indexRouter);
app.use('/users', usersRouter);




app.use(function (req, res, next) {
  next(createError(404));
});

// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

 
  next();
});

const port = 4000;

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});

module.exports = app;
