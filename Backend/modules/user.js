const mongoose = require('mongoose')

const UserSchima = new mongoose.Schema({
    profileImage: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    paymentStatus: {
        type: String,
        enum: ['unpaid', 'paid'],
        default: 'unpaid'
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'processing', 'shifted', 'delivered'],
    }

})

const User_Module = mongoose.model('User', UserSchima);
module.exports = User_Module
