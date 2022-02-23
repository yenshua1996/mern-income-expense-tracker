const mongoose = require("mongoose");

const connectDB = async function () {
  try {
    //Connect to mongoDB
    await mongoose.connect("mongodb://localhost:27017/mern-budget-tracker");

    //Console prompt
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
