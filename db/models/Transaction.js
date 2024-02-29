const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  date: String,
  type: String,
  amount: Number,
  category: String,
  description: String,
  internalGoalAllocation: String,
});

// mongoose date fix
transactionSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.date = ret.date.toString();
    return ret;
  },
});

module.exports =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);
