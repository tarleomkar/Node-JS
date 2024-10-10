const mongoose = require('mongoose');

// Define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabse' with your database name

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintainsa deafult mongoose.connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define ecent listeners for databse connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB contains error: ', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the databse connection