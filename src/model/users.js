const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId:{type: Number, required: true},
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType:{type: String, required: true},
  firstName:{type: String, required: true},
  lastName:{type: String, required: true},
  phoneNumber:{type: String, required: true},
  address:{type: String, required: true},
  registrationDate:{type: String, required: true},
  notes:{type: String}
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
