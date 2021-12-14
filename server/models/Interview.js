const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    type: String,
    Date: Date,
    Description: String
})

const Interview = mongoose.model("Interview", interviewSchema)
module.exports = Interview