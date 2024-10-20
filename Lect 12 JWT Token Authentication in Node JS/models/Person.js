const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  age: { type: Number }, // Age can be optional
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true, // Work is required and must be one of the defined values
  },
  mobile: { type: String, required: true }, // Mobile number is required
  email: { type: String, required: true, unique: true }, // Email is required and must be unique
  address: { type: String }, // Address can be optional
  salary: { type: Number, required: true }, // Salary is required
  username: { type: String, required: true }, // Username is required
  password: { type: String, required: true }, // Password is required
});

// Middleware to hash password before saving
personSchema.pre("save", async function (next) {
  const person = this;

  // Hash the password only if it has been modified or is new
  if (!person.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    person.password = await bcrypt.hash(person.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

// Compare entered password with stored hashed password
personSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create Person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
