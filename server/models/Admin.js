const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    Admin: Boolean
})

const Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin