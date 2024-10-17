// change for LocalAuthMiddleware at line number 49
const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// defining person schema
const Person = require('./models/Person');
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Middleware Function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next(); // Don't forget to call next() to pass control to the next middleware
};

// adding the middleware to all routes likewise
app.use(logRequest);

passport.use(new LocalStrategy(async (USERNAME, password, done) => {
  // authentication logic here
  try {
    console.log('Received credentials: ', USERNAME, password);
    const user = await Person.findOne({username: USERNAME});

    if(!user)
      return done(null, { message: 'Incorrect username.'});

    const isPasswordMatch = user.password === password ? true : false;

    if(isPasswordMatch) {
      return done (null, user);
    } else {
      return done(null, false, { message: 'Incorrect password.' });
    }
  }catch(err) {
    return done(err);
  }
}));

app.use(passport.initialize());

// main code here authentication
app.get('/', passport.authenticate('local', {session: false}), function (req, res) {
  res.send("Welcome to my hotel... ");
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// const Person = require("./models/Person");


// Use the routers
app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)

app.listen(PORT, () => {
  console.log("listening your orders on port 3000");
});
