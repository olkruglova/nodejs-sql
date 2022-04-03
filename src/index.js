"use strict";

const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Listening at " + process.env.PORT);
});

app.use(express.static("public"));
