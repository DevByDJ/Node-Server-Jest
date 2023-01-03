const mongoose = require('mongoose')
const express = require('express')

const schema = mongoose.Schema

const userSchema = new schema
(
  {
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String
  }, { timestamps: true}
)


const User = mongoose.model('user', userSchema)

module.exports = User