const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  calendar: [
    {
      year: {type: Number, required: true, unique: true},
      months: []
    }
  ]
});

module.exports = model('User', schema)