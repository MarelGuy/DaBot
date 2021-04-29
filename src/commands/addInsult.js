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
                .catch(err => {
                    if (err.request.res.statusCode === 404)
                        message.channel.send("The person that you want to insult doesn't exist!");
                    else
                        message.channel.send("Error 500, server error");
                })
        } catch (err) {
            console.log(err)
        }

    }
};