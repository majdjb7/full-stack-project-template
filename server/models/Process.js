const mongoose = require('mongoose')
const Schema = mongoose.Schema

const processSchema = new Schema({
    Id: Number,
    JobTitle: String,
    companyName: String,
    date: Date,
    Status: {
        type: String,
        enum: ['Applied', 'Accepted', "Rejected", "no-Reply", "Active"],
        default: 'Applied'
    },
    link: String,
    Interviews: [{ type: Schema.Types.ObjectId, ref: 'Interview' }]
})

const Process = mongoose.model("Process", processSchema)
module.exports = Process