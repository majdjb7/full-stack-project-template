const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    Cohort: String,
    Processes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student