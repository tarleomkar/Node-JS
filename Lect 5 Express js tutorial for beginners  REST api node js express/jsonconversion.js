const objectToConvert = {
    name: "Alice",
    age: 25
};

const json = JSON.stringify(objectToConvert);
console.log(json);

console.log(typeof json);
// Output
// {"name":"Alice","age":25}
// string