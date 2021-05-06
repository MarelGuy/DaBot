module.exports = {
    name: 'add-person',
    description: 'Adds a person to the database',
    execute: async (message, args) => {
        try {
            const axios = require('axios')
            if (args.length === 1) {
                let body = {
                    nome: args[0]
                }

                args.shift()
                body.insulto = args.join(" ");

                await axios.post("http://127.0.0.1:3005/persons", body)
                    .then(async res => {
                        if (res.status === 201)
                            message.channel.send("Person added!")
                    })
            } else {
                message.channel.send("Must provide just one argument!");
            }
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    }
};