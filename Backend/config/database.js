const mongoose = require('mongoose');

const DATABASE_URL = "mongodb://localhost:27017"


mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const database = mongoose.connection;

database.on('connected', ()=> {
    console.log('Connected to MongoDB');
})

database.on('error', ()=> {
    console.log('MongoDB Connection Error');
})

database.on('disconnected', ()=> {
    console.log('MongoDB Disconnected');
})