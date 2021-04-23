module.exports = {
    name: 'aggiungi-insulto',
    description: 'Insulti su ale',
    execute: async (message, args) => {
        const insultModel = require("../models/insultModel")

        let body = {
            insulto: args,
            for: args[0]
        }

        args.shift()
        body.insulto = args.join(" ");

        await new insultModel(body).save()
        message.channel.send("Insulto aggiunto!");
    }
};