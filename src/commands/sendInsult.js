module.exports = {
    name: 'insulta',
    description: 'Insulti una persona',
    execute: async (message, args) => {
        const insultModel = require("../models/insultModel")

        if (args.length === 1) {
            const insulti = await insultModel.find({ for: args[0].toString() })
            message.channel.send(insulti[Math.floor(Math.random() * insulti.length)].insulto.toString(), { tts: true });
        }
        else
            message.channel.send("Must provide just one argument");
    }
};