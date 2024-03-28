
const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Admin", adminSchema)