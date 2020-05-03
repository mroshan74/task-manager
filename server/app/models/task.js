const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  }
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task