const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Welcome to my hotel... How can i help you');
});

app.get('/panipuri', function(req, res) {
    res.send('sure sir, i would love to serve panipuri');
});

app.get('/idli', function(req, res) {
    var customizedIdli = {
        name: 'rava isli',
        size: '10 cm diameter',
        is_samber: true,
        is_chutney: false
    }
    res.send(customizedIdli);
    // res.send('sure sir, i would like to serve you idli');
});

app.post('/items', (req, res) => {
    res.send('data is saved');
})

app.listen(3000, ()=> {
    console.log('listening your orders on port 3000');
});