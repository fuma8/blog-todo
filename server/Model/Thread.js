const mongoose = require("mongoose")

const ThreadSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        max: 100
    },
    content:{
        type: String,
        max:100
    }
})

module.exports = mongoose.model("Thread", ThreadSchema)