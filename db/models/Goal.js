const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    goalName: String,
    savedAmount: Number,
    goalAmount: Number,



});






module.exports = mongoose.models.Goal || mongoose.model('Goal', goalSchema);

