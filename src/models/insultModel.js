const mongoose = require('mongoose')

const insultSchema = new mongoose.Schema({
    insulto: {
        required: true,
        type: String
    },
    for: { required: true, type: String, enum: ["ale", "cris", "teo", "loris"] }
})

module.exports = mongoose.model("insults", insultSchema)