const mongoose = require('mongoose')

const StudentSchima = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    },
    class: {
        type: String,
        require: true
    },
    subjects: [String],
    guardian: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    },
    admissionDate:{
        type:Date,
        required: true
    }
})

const Student = mongoose.model('student', StudentSchima);
module.exportst = Student