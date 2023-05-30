const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        data: buffer,
        contentType: String
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Article", articleSchema)