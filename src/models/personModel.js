const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    nome: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model("persons", personSchema)