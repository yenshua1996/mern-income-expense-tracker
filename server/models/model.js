const mongoose = require("mongoose");

//Income schema
const incomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Expense schema
const expenseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Income model
const Income = mongoose.model("Income", incomeSchema);

//Expense model
const Expense = mongoose.model("Expense", expenseSchema);

module.exports = {
  Income,
  Expense,
};
