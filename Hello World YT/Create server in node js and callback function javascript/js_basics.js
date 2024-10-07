// console.log('server file is running');

const res = require("express/lib/response");

// function add(a, b) {
//     return a + b;
// }

// var add = function(a, b) {
//     return a + b;
// }

// var add = (a, b) => {return a + b}

// var add = (a, b) => a + b;

// var result = add(2, 5);
// console.log(result);

// IIFE
(function(a, b) {
    // console.log('omi'); 
})();

// callback function
/*
function callback() {
    console.log("now adding is successfully complited");
}

const add = function(a, b, callback) {
    var result = a + b;
    console.log('result: '+ result); // main function work complete
    callback();
}

add(3, 4, callback);
// add is main function
*/

const add = function(a, b, omi) {
    var result = a + b;
    console.log('result: '+ result);
    omi();
}

// add(2, 3, function(){
//     console.log('add complited');
// });

// more short
add(2, 3, () => console.log('add completed'));
