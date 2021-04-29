const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    nome: {
        required: true,
        type: String
    },
    insulti: {
        type: Number
    }
})

module.exports = mongoose.model("persons", personSchema)