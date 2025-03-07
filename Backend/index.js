const express = require('express');
const app = express();
const passport = require('passport');

const dotenv = require('dotenv');
dotenv.config();
require('./config/passport')
const db = require('./config/database');
app.use(express.json())

const userRoute = require('./routes/user-route')

app.use('/User', userRoute)

app.listen(process.env.PORT, ()=>{
	console.log(`Server running on port ${process.env.PORT}`);
})


