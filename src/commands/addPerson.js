module.exports = {
    name: 'aggiungi-persona',
    description: 'Insulti su ale',
    execute: async (message, args) => {
        if (args.length === 1) {
            const personModel = require("../models/personModel")

            let body = {
                nome: args[0]
            }

            args.shift()
            body.insulto = args.join(" ");

            await new personModel(body).save()
            message.channel.send("Persona aggiunta!");
        } else {
            message.channel.send("Must provide just one argument!");
        }
    }
};