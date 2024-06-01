const mongoose = require('mongoose');

const subsidySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  subsidyItem: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Subsidy = mongoose.model('Subsidy', subsidySchema);

module.exports = Subsidy;
