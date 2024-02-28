const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: String,
  type: String,
  amount: Number,
  category: String,
  description: String,
  internalGoalAllocation: String,
});

// mongoose date fix. DONT TOUCH! And yes, i know about the Date function, its f*
transactionSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.date = ret.date.toString();
    return ret;
  }
})



module.exports = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

