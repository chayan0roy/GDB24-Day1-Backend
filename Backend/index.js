const express = require('express');

const app = express();

app.get('/', function(req,res) {
    res.send('Hello GDB24')
})

app.get('/chicken', function(req,res) {
    res.send('Hello Sir')
})

app.listen(5000)
