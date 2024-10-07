const notes = require('./notes.js');
var omi = require('loadash');

// console.log('server file is available');

var age = notes.age;
var result = notes.addNumber(age + 18, 10)

console.log(age);
console.log('result is now: '+ result);

var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];
var filter = omi.uniq(data);
console.log(filter);
// output: ['person', 1, 2, 'name', 'age', '2']

console.log(_.isString(false)); // false
