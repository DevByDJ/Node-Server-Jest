import mongoose from 'mongoose'
import express from 'express'

const schema = mongoose.Schema

const userSchema = new schema
(
  {
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String
  }, { timestamps: true}
)


const User = mongoose.model('user', userSchema)

export default User