const mongoose = require('mongoose')




const PostSchima = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
},{timestamps:true})



const Post_Module = mongoose.model('Post', PostSchima);
module.exports = Post_Module
