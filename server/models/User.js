const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    Cohort: String,
    Processes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const User = mongoose.model("User", userSchema)
module.exports = User