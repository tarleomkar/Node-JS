const mongoose = require('mongoose');

// Define the Person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Corrected spelling
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true // Corrected spelling
    },
    mobile: {
        type: String,
        required: true // Corrected spelling
    },
    email: {
        type: String,
        required: true, // Corrected spelling
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number, // Salary should ideally be a number, since it's a numeric value
        required: true // Corrected spelling
    }
});

// Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
