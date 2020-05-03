const express = require('express')
const router = express.Router()

const tasksController = require('../app/controllers/tasksController')

router.get('/tasks',tasksController.list)
router.post('/tasks',tasksController.create)
router.get('/tasks/:id',tasksController.show)
router.put('/tasks',tasksController.update)
router.delete('/tasks',tasksController.destroy)

module.exports = router