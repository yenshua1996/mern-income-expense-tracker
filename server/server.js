const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const errorHandler = require("./config/errorHandler");
const router = require("./routes/routes");

//Express app
const app = express();

//Application middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Application routes
app.use("/api/budget", router);

//Custom error handler
app.use(errorHandler);

//Start express server
app.listen(3030, () => {
  //Connect to database
  connectDB();
});
