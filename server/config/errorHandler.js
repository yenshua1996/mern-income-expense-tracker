const errorHandler = (err, req, res, next) => {
  res.status(404).json({ err: err.message, stack: err.stack });
};

module.exports = errorHandler;
