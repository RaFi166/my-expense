const Mytransaction = require("../models/transactionModel");

const getTransaction = async (req, res) => {
  const allData = await Mytransaction.find();
  res.send(allData);
};

const postTransaction = async (req, res) => {
  const data = await Mytransaction.create({
    amount: req.body.amount,
    description: req.body.description,
    date: req.body.date,
  });
  res.send(data);
};

const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  await Mytransaction.deleteOne({ _id: id });
  res.send("deleted");
};

module.exports = {
  getTransaction,
  postTransaction,
  deleteTransaction,
};
