module.exports = {
    name: 'add-insult',
    description: 'Adds an insult to the database',
    execute: async (message, args) => {
        const axios = require('axios')
        try {
            let body = {
                insulto: args,
                for: args[0]
            }
            args.shift()
            body.insulto = args.join(" ");
            await axios.post("http://127.0.0.1:3005/insults", body)
                .then(() => message.channel.send("Insult added!"))
        } catch (err) {
            console.log(err)
        }

    }
};