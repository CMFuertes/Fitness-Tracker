const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
      },

      exercises: [{
        type: {type: String},
        name: {type: String},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number}, 
    }]
}, {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  });
// adds a dynamically-created property to schema
ExampleSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const workouts = mongoose.model("Workouts", ExampleSchema);

module.exports = workouts;