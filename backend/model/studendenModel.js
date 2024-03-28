
const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    Id: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true
    },
    Addres: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    Class : {
        type: String,
        required: true
    },
},
{timestamps : true}
)

module.exports = mongoose.model("Student", studentSchema)