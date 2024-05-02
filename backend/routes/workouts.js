const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
