const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
});

const User = mongoose.model('Users', LoginSchema);

module.exports = User;
