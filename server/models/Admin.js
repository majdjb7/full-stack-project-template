const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: String,
    email: String,
    phone: String,
})

const Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin