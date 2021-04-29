const app = require('express').Router()

const insultsRouter = require('./insults')
const personsRouter = require('./persons')

app.use("/insults", insultsRouter)
app.use("/persons", personsRouter)

module.exports = app