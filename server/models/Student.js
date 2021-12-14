const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    Cohort: Number,
    Processes: [{ type: Schema.Types.ObjectId, ref: 'Process' }]
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student