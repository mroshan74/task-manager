const Tasks = require('../models/task')

// GET tasks
module.exports.list = (req,res) =>{
    Tasks.find()
      .then((tasks) => {
        res.json(tasks)
      })
      .catch((err) => {
        res.json(err)
      })
}

// POST task
module.exports.create = (req,res) => {
    const body = req.body
    const task = new Tasks(body)
    task
      .save()
      .then((task) => {
        res.json(task)
      })
      .catch((err) => {
        res.json(err)
      })
}

// GET single task
module.exports.show = (req,res) => {
    const id = req.params.id
    Tasks.findById(id)
      .then((task) => {
        if (task) {
          res.json(task)
        } else {
          res.json({})
        }
      })
      .catch((err) => {
        res.json(err)
      })
}

// PUT task
module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Tasks.findByIdAndUpdate(id, body, { 
        new: true, 
        runValidators: true 
    })
      .then((task) => {
        res.json(task)
      })
      .catch((err) => {
        res.json(err)
      })
}

// DELETE task
module.exports.destroy = (req,res) => {
    const id = req.params.id
    Tasks.findByIdAndDelete(id)
      .then((task) => {
        res.json(task)
      })
      .catch((err) => {
        res.json(err)
      })
}
