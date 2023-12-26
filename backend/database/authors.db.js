const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  name: { type: String, required: true, maxlength: 50 },
});

module.exports = mongoose.model('Product', authorSchema);