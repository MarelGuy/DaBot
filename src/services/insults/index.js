const app = require("express").Router()

const insultModel = require("../../models/insultModel")
const personModel = require("../../models/personModel")

app.get('/', async (req, res, next) => {
    try {
        res.status(200).send(await insultModel.find())
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.get('/:id', async (req, res, next) => {
    try {
        res.status(200).send(await insultModel.findById(req.params.id))
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
        const personArray = await personModel.find()

        await new Promise((resolve, reject) => {
            personArray.forEach(async person => {
                if (person.nome.toString().toLowerCase() === req.body.for.toString().toLowerCase()) {
                    await new insultModel(req.body).save()
                    resolve(true)
                    res.status(201).send()
                }
            })

            resolve(false)
        })
            .then((value) => {
                if (value === false)
                    res.status(404).send()
            })
            .catch((err) => res.status(500).send())
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.post('/rand', async (req, res, next) => {
    try {
        const insultsArray = await insultModel.find({ for: req.body.for })
        if (insultsArray !== undefined) {
            const insulto = insultsArray[Math.floor(Math.random(insultsArray.length))]
            if (insulto !== undefined)
                res.status(200).send(insulto)
            else
                res.status(404).send()
        } else
            res.status(404).send()
    } catch (err) {
        console.log(err)
        next(err)
    }
});

app.delete('/:id', async (req, res, next) => {
    try {
        await insultModel.findByIdAndDelete(req.params.id)
        res.status(200)
    } catch (err) {
        console.log(err)
        next(err)
    }
});



module.exports = app