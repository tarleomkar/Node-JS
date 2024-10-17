const express = require("express");
const app = express();
const db = require("./db"); // Ensure db.js is correctly connecting to MongoDB

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // To parse incoming JSON requests

const menuItem = require("./models/menuItem"); // Import the menuItem model

// Home route
app.get("/", function (req, res) {
  res.send("Welcome to my hotel... How can I help you?");
});

// POST route to add a menu item
app.post("/menuitem", async (req, res) => {
  try {
    const data = req.body; // Getting the menu item data from request body

    // Create a new menu item document using the Mongoose model
    const newMenuItem = new menuItem(data);

    // Save the new menu item to the database
    const response = await newMenuItem.save();
    console.log("Menu item saved");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch all menu items
app.get("/menuitem", async (req, res) => {
  try {
    const data = await menuItem.find(); // Fetch all menu items
    console.log("Menu items fetched");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Listening for orders on port 3000");
});
