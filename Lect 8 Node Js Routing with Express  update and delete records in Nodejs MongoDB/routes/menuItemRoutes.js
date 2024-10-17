const express = require("express");
const router = express.Router();
const menuItem = require("../models/menuItem");

// POST route to add a menu item
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find(); // Fetch all menu items
    console.log("Menu items fetched");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch menu items by taste
router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste; // Extract the taste from the URL parameter

    // Find menu items based on the taste field
    const menuItems = await menuItem.find({ taste: taste });

    if (menuItems.length > 0) {
      console.log("Menu items with taste fetched");
      res.status(200).json(menuItems);
    } else {
      res.status(404).json({ error: "No menu items found with this taste" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Operation
router.put('/:id', async(req, res) => {
  try{
    const menuItemId = req.params.id; // Extract the id from the URL paramter to Update
    const updatemenuItemData = req.body;

    const response = await menuItem.findByIdAndUpdate(menuItemId, updatemenuItemData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    })

    if(!response) {
      return res.status(404).json({error: 'MenuItem not found'})
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
    const menuItemId = req.params.id; // Extract the menu's ID from the URL parameter to Delete

    // Assuming you have a Menu model
    const response = await menuItem.findByIdAndDelete(menuItemId);
    if (!response) {
      return res.status(404).json({error: 'MenuItem not found'});
    }
    console.log('Data deleted');
    res.status(200).json({message: 'MenuItem data deleted sucessfully'});
  }catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'}); 
  }
});

module.exports = router;
