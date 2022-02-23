const getExpenseController = async (req, res) => {
  res.status(200).json({
    Msg: "Get All Expenses!",
  });
};

module.exports = {
  getExpenseController,
};
