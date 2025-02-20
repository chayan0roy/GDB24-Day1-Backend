const express = require('express');
const app = express();

const database = require('./config/database');


app.get('/', (req, res)=>{
    res.send('Like Karo follow karo')
})


app.get('/atanu', (req, res)=>{
    res.send('Atanu babu ke Like Karo follow karo')
})




























app.listen(5000, ()=>{
    console.log('Server Running on port 5000');
})