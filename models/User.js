const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // username: { type: String, required: true },

  years: [{ type: Types.ObjectId, ref: 'Year' }]
});

module.exports = model('User', schema)