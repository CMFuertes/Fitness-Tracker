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