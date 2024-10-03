// jab bhi server request accept karta hai waha sai route ke beech pauchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho, to ye element middleware kehlata hai

const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log('middleware chala');
    next();
});

app.use(function (req, res, next) {
    console.log('middleware chala ek aur bar');
    next();
});

app.get("/", function(req, res) {
    res.send("champion mera omi")
})

app.get("/about", function(req, res) {
    res.send("about page hai ye")
});

app.listen(3000);
