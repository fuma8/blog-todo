const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');

const todoTrelloSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4()
  },
  title: {
    type: String,
    default: "月曜日"
  },
  tasks: [{
    id: {
      type: String,
      default: uuidv4()
    },
    title: {
      type: String,
      default: "論文を読む"
    }
  }]
})

module.exports = mongoose.model("todoTrello", todoTrelloSchema)