const asyncHandler = require("express-async-handler");
const { Expense } = require("../models/model");

//GET Expense controller
const getExpenseController = asyncHandler(async (req, res) => {
  //Get all expenses
  const expenses = await Expense.find().sort({ createdAt: "desc" });

  //Check expenses
  if (!expenses) {
    res.status(404);

    throw new Error("Failed to fetch expenses");
  }

  //Response to client
  res.status(200).json({ results: expenses });
});

//POST Expense controller
const postExpenseController = asyncHandler(async (req, res) => {
  //Recieve user inputs
  const { name, amount } = req.body;

  //Validate inputs
  if (!name || !amount) {
    res.status(404);

    throw new Error("Please fill up all form fields!");
  }

  //Create new expenses
  const expense = new Expense({
    name,
    amount,
  });

  //Save new expenses to database
  const response = await expense.save();

  //Response to client
  res.status(200).json({
    payload: response,
  });
});

//DELETE Expense controller
const deleteExpenseController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const expense = await Expense.findByIdAndDelete(id);

  if (!expense) {
    res.status(404);

    throw new Error("Failed to delete expense");
  }

  res.status(200).json({
    payload: expense._id,
  });
});

//UPDATE Expense controller
const updateExpenseController = asyncHandler(async (req, res) => {
  //Get id expense
  const { id } = req.params;

  //Get updated user input
  const { name, amount } = req.body;

  //Find expense by id and update
  const expense = await Expense.findByIdAndUpdate(
    id,
    { name, amount },
    { new: true }
  );

  //Check if successful
  if (!expense) {
    res.status(404);

    throw new Error("Failed to update expense");
  }

  //Request to client
  res.status(200).json({ payload: expense });
});

module.exports = {
  getExpenseController,
  postExpenseController,
  deleteExpenseController,
  updateExpenseController,
};
