const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // years: [{ type: Types.ObjectId, ref: 'Year' }]
});

module.exports = model('User', schema)