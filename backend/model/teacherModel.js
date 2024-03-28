
const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
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
    email: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Salary : {
        type: Number,
        required: true
    },
},
{timestamps : true}
)

module.exports = mongoose.model("Teacher", teacherSchema)