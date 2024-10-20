const express = require("express");
const router = express.Router();
const Person = require("../models/Person");
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

// POST route to add a person
router.post('/signup', async (req, res) =>{
  try{
      const data = req.body // Assuming the request body contains the person data

      // Create a new Person document using the Mongoose model
      const newPerson = new Person(data);

      // Save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');

      const payload = {
          id: response.id,
          username: response.username
      }
      console.log(JSON.stringify(payload));
      const token = generateToken(payload);
      console.log("Token is : ", token);

      res.status(200).json({response: response, token: token});
  }
  catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})

// Login Route
router.post('/login', async(req, res) => {
  try{
    // Extract username and password from request body
    const {username, password} = req.body;

    // Find the user by username
    const user = await Person.findOne({username: username});

    // If user does not exist or password does not match, return error
    if(!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invali`d username or password' });
    }

    // genrate token
    const payload = {
      id: user.id,
      username: user.username
    }
    const token = generateToken(payload);

    // return token as response
    res.json({token});
  }catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

// Prfile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
  try{
      const userData = req.user;
      console.log("User Data: ", userData);

      const userId = userData.id;
      const user = await Person.findById(userId);

      res.status(200).json({user});
  }catch(err){
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
})


// GET method to fetch all persons
router.get('/',jwtAuthMiddleware, async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Person data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method to fetch persons by work type
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract the work type from the URL parameter
    if (workType === "chef" || workType === "manager" || workType === "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Person data fetched by work type");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Operation
router.put('/:id', async(req, res) => {
  try{
    const personId = req.params.id; // Extract the id from the URL paramter to Update
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    })

    if(!response) {
      return res.status(404).json({error: 'Person not found'})
    }

    console.log('data updated');
    res.send(200).json(response);
  }catch(err){
    console.log('data updated');
    res.status(500).json({error: 'Internal Server Error'});
  }
});

// Delete Operation
router.delete('/:id', async(req, res) => {
  try {
    const personId = req.params.id; // Extract the perosn's ID from the URL parameter to Delete

    // Assuming you have a Person model
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('Data deleted');
    res.status(200).json({message: 'Person data deleted sucessfully'});
  }catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'}); 
  }
});

module.exports = router;
