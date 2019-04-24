var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// const urlhome = new URL('http://localhost:3000');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CV', {useNewUrlParser: true});
// //login logout module
const bodyParser = require('body-parser')
// const Passport = require('passport')
// const localStrategy = require('passport-local').Strategy
// const session = require('express-session')
// const fs = require('fs')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// //login
// app.use(session({ secret: "mysecret",
//                   resave: false,
//                   saveUninitialized:false,
//                   rolling: true,
//                   cookie:{
//                     maxAge:1000*60,
//                     expires:1000*60
//                   }
// }))
// app.use(Passport.initialize())
// app.use(Passport.session())
// app.use(bodyParser.urlencoded({extended:true}))

// app.route('/login').get((req,res)=>{
//     if(req.isAuthenticated()){
//         res.redirect(urlhome);

//     }
//        res.render('login')


// }).post(Passport.authenticate('local', { failureRedirect: '/login', successRedirect: urlhome }))

// Passport.use(new localStrategy(
//   (username,password,done)=>{
//     fs.readFile('./models/userDB.json',(err,data)=>{
//       const db = JSON.parse(data)
//       const userRecord = db.find(user => user.usr === username)
//       if(userRecord && userRecord.pwd === password){
//         return done(null,userRecord)
//       }else return done(null,false)
//     })
//   }
// ))

// Passport.serializeUser((user, done) => {
//   done(null, user.usr)
// })

// Passport.deserializeUser((name, done) => {
//   fs.readFile('./models/userDB.json', (err, data) => {
//     const db = JSON.parse(data)
//     const userRecord = db.find(user => user.usr === name)
//     if (userRecord) {
//       return done(null, userRecord)
//     } else {
//       return done(null, false)
//     }
//   })
// })

// app.route('/logout').get((req,res)=>{
//   // req.isAuthenticated()

//   req.logOut()
//   res.redirect('/')

// })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); 

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const port =  4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
 });

module.exports = app;
