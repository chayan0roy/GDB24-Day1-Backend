const mongoose = require('mongoose');

const DATABASE_URL = "mongodb://localhost:27017/database";

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('✅ MongoDB Connected!');
});

db.on('error', (error) => {
    console.log('❌ MongoDB Connection Error:', error);
});

db.on('disconnected', () => {
    console.log('⚠️ MongoDB Disconnected!');
});
