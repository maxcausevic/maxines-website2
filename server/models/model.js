const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;