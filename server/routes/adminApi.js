const express = require('express')
const router = express.Router()
const Process = require('../models/Process')
const Student = require('../models/Student')

router.get('/allStudents', function (req, res) {

    Student.find({})
    .populate({
        path:'Processes',
        populate:{
            path:'Interviews'
        }
    })
    .exec(function(err, students) {
        res.send(students)
        
    })
    
})

module.exports = router;

// Visitor.findOne({})
//         .populate({
//             path: 'homePlanet',
//             populate: {
//                 path: 'system'
//             }
//         })
//         .exec(function(err, visitor) {
//             console.log("Visitor's homeplanet star name: ", visitor.homePlanet.system.starName)
//         })