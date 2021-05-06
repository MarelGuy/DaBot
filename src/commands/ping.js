module.exports = {
    name: 'ping',
    description: 'Gives the latency of the server',
    execute: async (message, args) => {
        try {
            message.channel.send(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms.`);
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    }
};