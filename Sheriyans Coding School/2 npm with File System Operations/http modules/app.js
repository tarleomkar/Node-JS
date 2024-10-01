// internet par kuch bhi karne ke liye rules banaye gaye hai unke swarra jinhone internet banaaya hai, ab un rules ko follow karna jaruri hai, aur ye rules follow ho isliye ye rules aap ke operating system ke software mein pre installed aate hai

// http - protocol
// yahi protocol hai ya rule hai jisko follow kare bina aap internet pe naa hi kuch bhej sakte ho, naa hi kuchh manga sakte ho

const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("hello world")
})

server.listen(3000);