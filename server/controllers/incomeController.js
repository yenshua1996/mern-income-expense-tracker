const asyncHandler = require("express-async-handler");
const { Income } = require("../models/model");

//GET Income controller
const getIncomeController = asyncHandler(async (req, res) => {
  //Get all incomes
  const incomes = await Income.find().sort({ createdAt: "desc" });

  if (!incomes) {
    res.status(404);

    throw new Error("Failed to fetch incomes");
  }

  //Response to client
  res.status(200).json({
    results: incomes,
  });
});

//POST Income controller
const postIncomeController = asyncHandler(async (req, res) => {
  // Recieve user inputs
  const { name, amount } = req.body;

  // Validate inputs
  if (!name || !amount) {
    res.status(404);

    throw new Error("Please fill up all form fields!");
  }

  // Create new income
  const income = new Income({
    name,
    amount,
  });

  // Save new income to database
  const response = await income.save();

  //Response to client
  res.status(200).json({ payload: response });
});

//DELETE income controller
const deleteIncomeController = asyncHandler(async (req, res) => {
  //Get income id
  const { id } = req.params;

  //Find by id and delete income
  const income = await Income.findByIdAndDelete(id);

  //Check for income
  if (!income) {
    res.status(404);

    throw new Error("Failed to delete income");
  }

  //Response to client
  res.status(200).json({ payload: income._id });
});

//UPDATE income controller
const updateIncomeController = asyncHandler(async (req, res) => {
  //Get id income
  const { id } = req.params;

  //Get updated user input
  const { name, amount } = req.body;

  //Find income by id and update
  const income = await Income.findByIdAndUpdate(
    id,
    { name, amount },
    { new: true }
  );

  //Check if successful
  if (!income) {
    res.status(404);

    throw new Error("Failed to update income");
  }

  //Response payload
  res.status(200).json({ payload: income });
});

//Exports Controllers
module.exports = {
  getIncomeController,
  postIncomeController,
  deleteIncomeController,
  updateIncomeController,
};
