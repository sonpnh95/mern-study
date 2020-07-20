const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
},
  {timestamps: true}
)

const User = mongoose.model('User', userSchema)

module.exports = User