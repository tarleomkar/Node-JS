const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

const Person = require("./models/Person");
// const menuItem = require("./models/menuItem");


app.get("/", function (req, res) {
  res.send("Welcome to my hotel... How can i help you");
});

// POST route to add a person
app.post("/person", async(req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data
    
        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);
    
        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
      }catch(err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      }
});

// GET method to get the person
app.get('/person', async(req, res) => {
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.error(err);
        res.status(500).json({ error: "Internal server error" });
  }
})

app.listen(3000, () => {
  console.log("listening your orders on port 3000");
});
