const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController')
const Fetchuser = require("../middleware/Fetchuser");
const router = express.Router()

// GET all workouts
router.get('/',Fetchuser, getWorkouts)

// GET a single workout
router.get('/:id',Fetchuser, getWorkout)

// POST a new workout
router.post('/', Fetchuser, createWorkout)

// DELETE a workout
router.delete('/:id', Fetchuser, deleteWorkout)

// UPDATE a workout
router.patch('/:id', Fetchuser, updateWorkout)

module.exports = router