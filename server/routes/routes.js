const express = require("express");
const {
  getIncomeController,
  postIncomeController,
  deleteIncomeController,
  updateIncomeController,
} = require("../controllers/incomeController");
const {
  getExpenseController,
  postExpenseController,
  deleteExpenseController,
  updateExpenseController,
} = require("../controllers/expenseController");

//Express router
const router = express.Router();

//Income
/////////////////////////////////////////////

//GET Incomes
router.get("/incomes", getIncomeController);

//POST Income
router.post("/income", postIncomeController);

//DELETE Income
router.delete("/income/:id", deleteIncomeController);

//UPDATE Income
router.patch("/income/:id", updateIncomeController);

//Expense
/////////////////////////////////////////////

//GET Expenses
router.get("/expenses", getExpenseController);

//POST Expense
router.post("/expense", postExpenseController);

//DELETE Expense
router.delete("/expense/:id", deleteExpenseController);

//UPDATE Expense
router.patch("/expense/:id", updateExpenseController);

//Export route
module.exports = router;
