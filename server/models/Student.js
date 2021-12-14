const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    Cohort: {
        type: String,
        enum: ['cohort-1', 'cohort-2', "cohort-3", "cohort-4"],
        default: 'cohort-4'
    },
    ProcessesCounter: Number,
    Admin: Boolean,
    Processes: [{ type: Schema.Types.ObjectId, ref: 'Process' }]
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student