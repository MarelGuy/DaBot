module.exports = {
    name: 'add-insult',
    description: 'Adds an insult to the database',
    execute: async (message, args) => {
        try {
            const axios = require('axios')
            let body = {
                insulto: args,
                for: args[0]
            }
            args.shift()
            body.insulto = args.join(" ");
            await axios.post("http://127.0.0.1:3005/insults", body)
                .then(() => message.channel.send("Insult added!"))
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    }
};