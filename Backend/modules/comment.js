const mongoose = require('mongoose')
const Schima = mongoose.schima



const CommentSchima = new mongoose.Schema({
    user: {
        type: Schima.Types.ObjectId,
        ref: 'User',
        required: true
    },
    icon: {
        type: String,
        default: '📃'
    },
    title: {
        type: String,
    },
    position: {
        type: Number,
        required: true
    },
    favourite: {
        type: Boolean,
        required: true
    },
}, { timestamps: true })



const Comment_Module = mongoose.model('Comment', CommentSchima);
module.exports = Comment_Module




