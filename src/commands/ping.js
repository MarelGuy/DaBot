module.exports = {
    name: 'ping',
    description: 'Gives the latency of the server',
    execute: async (message, args) => {
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`);
    }
};