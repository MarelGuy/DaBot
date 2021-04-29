const mongoose = require('mongoose')
const personModel = require('./personModel')

let insultSchema = new mongoose.Schema({
    insulto: {
        required: true,
        type: String
    },
    for: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("insults", insultSchema)