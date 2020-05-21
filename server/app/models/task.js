const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
  title: {
    type: String,
    minlength: [5, 'title should be more than 5 characters'],
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    // custom validator
    validate: {
      validator: function(value){  // value -> passed from front-end
        return value >= new Date()
      },
      message: function(){
        return 'due date cannot be less than today'
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

taskSchema.pre('validate',function(next){
  console.log('pre validation function called')
  next()
})

taskSchema.pre('save',function(next){
  console.log('pre save function called')
  next()
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task