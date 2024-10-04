// hum log kuch bhi data frontend par browser par rakh skte hai and jab bhi aap kuch bhi request backend par karoge wo fe par saved data automatically backend par chala jaayega

const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.send("champion mera anuj");
});

app.get("/about", function(req, res) {
    res.send("about page hai ye");
});

app.get("/profile", function(req, res, next) {
    return next(new Error("Not implemented"));
});

app.listen(3000);
// tumne to bheja that plain text par server ko mila blob which is not directly readable ab is cheej ko handle karna padega ki hum us blob ko waapse se readable kar sake