const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const passport = require('./auth'); // Import passport configuration
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware Function to log requests
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next(); // Pass control to the next middleware
};

// Add logging middleware to all routes
app.use(logRequest);

// Initialize passport
app.use(passport.initialize());

// Local authentication middleware
const localAuthMiddleware = passport.authenticate('local', { session: false });

// Main welcome route
app.get('/', (req, res) => {
  res.send("Welcome to my hotel...");
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes); // Protect '/person' routes
app.use('/menu', menuItemRoutes); // Menu routes (no authentication required)

// Start the server
app.listen(PORT, () => {
  console.log(`Listening for orders on port ${PORT}`);
});
