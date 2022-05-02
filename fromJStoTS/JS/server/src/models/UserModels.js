const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()

const dbCollection = 'user'    // user collection

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const UserModel = new mongoose.model(dbCollection, UserSchema)

module.exports = { UserModel }