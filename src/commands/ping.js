module.exports = {
    name: 'ping',
    description: 'Ti da la latenza',
    execute: async (message, args) => {
        const Discord = require('discord.js');
        const client = new Discord.Client();

        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`);
    }
};