const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    isAdmin: {
        type: Boolean,
        default:false,
    }
    // img: {
    //     data: buffer,
    //     contentType: String
    // }
})

module.exports = mongoose.model("User", userSchema)