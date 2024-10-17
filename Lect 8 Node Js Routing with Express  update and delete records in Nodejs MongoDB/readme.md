🍔 Hotel Menu & Person Management CRUD Operations
This project demonstrates CRUD operations on Person and Menu models using Express.js, Mongoose, and MongoDB. It allows you to create, read, update, and delete records for persons working at a hotel and items on the menu. We also perform requests via Postman for testing purposes. 🔥

📁 Project Structure
.
├── models/
│   ├── Person.js  # Person schema (e.g., name, age, work, etc.)
│   └── menuItem.js  # Menu Item schema (e.g., name, taste, price, etc.)
├── routes/
│   ├── personRoutes.js  # Routes to handle CRUD operations for persons
│   └── menuItemRoutes.js  # Routes to handle CRUD operations for menu items
├── server.js  # Main server file
└── images/  # Stepwise process images

🚀 How to Run the Project
1. Clone the repository and install dependencies:
git clone <repository-url>
cd <project-folder>
npm install

2. Run the server using Nodemon for automatic reloading:
nodemon server.js

3. Test the APIs using Postman or any API testing tool. You can perform the following operations:
• Create a new person or menu item.
• Read the list of persons or menu items.
• Update any existing record.
• Delete a record.

📋 CRUD Operations
1. Person Management 👤
• POST /person: Add a new person to the database.
• GET /person: Get all persons from the database.
• GET /person/:workType: Filter persons by their work type (chef, waiter, manager).
• PUT /person/:id: Update a person’s data by their ID.
• DELETE /person/:id: Remove a person by their ID.

2. Menu Item Management 🍔
• POST /menu: Add a new menu item to the database.
• GET /menu: Get all menu items from the database.
• GET /menu/:taste: Filter menu items by taste (e.g., spicy, sweet).
• PUT /menu/:id: Update a menu item’s data by its ID.
• DELETE /menu/:id: Remove a menu item by its ID.

📸 Images Folder
Stepwise images of CRUD operations via Postman can be found in the images/ folder. You can see:
1. Running the server using nodemon.
2. Performing all POST, GET, PUT, and DELETE operations.

📦 Dependencies
• Express.js: Fast, unopinionated, minimalist web framework for Node.js.
• Mongoose: Elegant MongoDB object modeling for Node.js.
• Nodemon: Automatically restarting the node application when file changes are detected.

🌟 Future Enhancements
• Add authentication for user access control.
• Implement validation for the input data to enhance security and consistency.
• Create a frontend interface to interact with the API.

Enjoy building and managing your hotel system! 😁🍴