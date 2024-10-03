const fs = require("fs");

// fs.writeFile("hey.txt", "hey hello kaise ho", function(err) {
//     if(err) console.log(err);
//     else console.log("done");
// });

// append is adding data into existing file likewise
// fs.appendFile("hey.txt", "mai to achha hu", function(err) {
//     if(err) console.log(err);
//     else console.log("done");
// });

// renames the file
// fs.rename("hey.txt", "hello.txt", function(err) {
//     if(err) console.log(err);
//     else console.log("done");
// });

// fs.copyFile("hello.txt", "./copy/chacha.txt", function(err) {
//     if(err) console.err(err)
//     else console.log("done");
// });

// fs.unlink("hello.txt", function (err) {
//   if (err) console.log(err);
//   else console.log("removed");
// });

fs.rm("./copy", {recursive: true}, function(err) {
    if(err) console.log(err);
    else console.log("removed");
});