const express = require("express");
const {
  getIncomeController,
  postIncomeController,
} = require("../controllers/incomeController");
const { getExpenseController } = require("../controllers/expenseController");

//Express router
const router = express.Router();

//GET Incomes
router.get("/incomes", getIncomeController);

//POST Income
router.post("/income", postIncomeController);

/////////////////////////////////////////////

//GET Expenses
router.get("/expenses", getExpenseController);
module.exports = router;
