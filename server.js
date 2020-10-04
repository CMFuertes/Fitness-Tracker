const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });