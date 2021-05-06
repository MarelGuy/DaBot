module.exports = {
    name: 'insult',
    description: 'Insults someone',
    execute: async (message, args) => {
        try {
            const axios = require('axios')
            if (args.length === 1) {
                const body = {
                    for: args[0]
                }
                await axios.post(url + "insults/rand", body)
                    .then(res => message.channel.send(res.data.insulto))
                    .catch(async err => {
                        if (err.request.res.statusCode) {
                            if (err.request.res.statusCode === 404)
                                message.channel.send("The person that you want to insult doesn't exist!");
                            else
                                message.channel.send("Error 500, server error");
                        } else {
                            console.log(err)
                        }
                    })
            }
            else
                message.channel.send("Must provide just one argument");
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    }
};