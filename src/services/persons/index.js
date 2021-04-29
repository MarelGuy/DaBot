const app = require("express").Router()

const insultModel = require("../../models/insultModel")
const personModel = require("../../models/personModel")

app.get('/', async (req, res, next) => {
    try {
        res.status(200).send(await personModel.find())
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.get('/:id', async (req, res, next) => {
    try {
        res.status(200).send(await personModel.findById(req.params.id))
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.get('/:name', async (req, res, next) => {
    try {
        res.status(200).send(await personModel.find(req.params.name))
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.post('/', async (req, res, next) => {
    try {
        await new personModel(req.body).save()
        res.status(201).send()
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.delete('/:id', async (req, res, next) => {
    try {
        await personModel.findByIdAndDelete(req.params.id)
        res.status(200)
    } catch (err) {
        console.log(err)
        next(err)
    }
});



module.exports = app