"use strict";

const express = require("express");
const config = require("../config");
const app = express();
const programmingLanguagesRouter = require("../routes/programmingLanguages");

app.listen(config.port, () => {
  console.log("Running at " + config.port);
});

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json({ limit: "1Mb" }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/programming-languages", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// const database = [];

// app.post("/api", (request, response) => {
//   const data = request.body;

//   database.push(data);

//   console.log(database);

//   response.json({
//     status: "success",
//     latitude: data.lat,
//     longitude: data.lon,
//   });
// });
