const mongoose = require('mongoose')




const ProductSchima = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
})



const Product = mongoose.model('Product', ProductSchima);
module.exportst = Product