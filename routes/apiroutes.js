const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({ body })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  
const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({ body })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts/range",function(req,res){  
    Workout.find()
    .then(dbWorkout =>{  
        res.json(dbWorkout)
    })
    .catch(err => { 
        res.json(err)
    })
});

router.post("/api/workouts/range",function (req,res){    
    Workout.create({})
    .then(dbWorkout => 
        {res.json(dbWorkout)
    })
    .catch(err => { 
        res.json(err)
    })
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });