const Tasks = require('../models/task')
const taskController = {}
// GET tasks
taskController.list = (req, res) => {
  Tasks.find({ user: req.user._id })
    .then((tasks) => {
      res.json(tasks)
    })
    .catch((err) => {
      res.json(err)
    })
}

// POST task
taskController.create = (req, res) => {
  const body = req.body
  const task = new Tasks(body)
  task.user = req.user._id
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
taskController.show = (req, res) => {
  const id = req.params.id
  Tasks.findOne({ _id: id, user: req.user._id })
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
taskController.update = (req, res) => {
  const id = req.params.id
  const body = req.body
  Tasks.findOneAndUpdate({ _id: id, user: req.user._id }, body, {
    new: true,
    runValidators: true,
  })
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      res.json(err)
    })
}

// DELETE task
taskController.destroy = (req, res) => {
  const id = req.params.id
  Tasks.findOneAndDelete({ _id: id, user: req.user._id })
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = taskController
