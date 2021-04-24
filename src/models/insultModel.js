const mongoose = require('mongoose')
const personModel = require('./personModel')

let personsArray = []

const dynamicPeopleArray = async () => {
    const rawPersonsArray = await personModel.find()
    rawPersonsArray.forEach(person => personsArray.push(person.nome))
}

dynamicPeopleArray()

let insultSchema = new mongoose.Schema({
    insulto: {
        required: true,
        type: String
    },
    for: {
        required: true, type: String,
        enum: personsArray.length === 0
            ? "loris"
            : personsArray
    }
})

module.exports = mongoose.model("insults", insultSchema)