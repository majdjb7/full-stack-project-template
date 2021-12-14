const express = require('express')
const router = express.Router()
const Process = require('../models/Process')

router.get('/allprocesses', async function (req, res) {
    const result = await Process.find({})
    res.send(result)
})

module.exports = router;