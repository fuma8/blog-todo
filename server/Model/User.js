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
    username: {
        type: String,
        required: true,
        min: 6
    },
    img: {
        data: buffer,
        contentType: String
    }
})

module.exports = mongoose.model("User", userSchema)