const asyncHandler = require("express-async-handler");
const { Income } = require("../models/model");

//GET Income controller
const getIncomeController = async (req, res) => {
  //Get all incomes
  const incomes = await Income.find();

  //Response to client
  res.status(200).json({
    results: incomes,
  });
};

//POST Income controller
const postIncomeController = asyncHandler(async (req, res) => {
  // Recieve user input
  const { name, amount } = req.body;

  // Validate input
  if (!name || !amount) {
    res.status(404);

    throw new Error("Please fill up all form fields!", 404);
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

module.exports = {
  getIncomeController,
  postIncomeController,
};
