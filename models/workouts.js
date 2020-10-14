const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
      },

      exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number, 
    }]
});

const workouts = mongoose.model("Workouts", ExampleSchema);

module.exports = workouts;