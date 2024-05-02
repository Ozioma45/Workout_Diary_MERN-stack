const express = require("express");
require("dotenv").config();

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route handler_react to request
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
