const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({

    Day: {
        type: Date,
        default: Date.now
      },

});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;