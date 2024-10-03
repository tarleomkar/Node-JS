const express = require('express');
const app = express();

// Global middleware for all routes
app.use(function(req, res, next) {
    console.log('middleware chala');
    next();
});

// Route that triggers an error
app.get("/profile", function(req, res, next) {
    next(new Error("Profile route not implemented"));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Logs the error stack for debugging
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
