const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const express = require('express');
const app = express();

const port = process.env.PORT

const fs = require("fs")
const mongoose = require('mongoose');

client.once('ready', () => {
    client.user.setPresence({
        status: 'ONLINE',
        activity: {
            name: "The Master of Unlocking.",
            type: "STREAMING"
        }
    });

    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }

    console.log(`Running on port ${port}. Also, the bot is logged as ${client.user.tag}`)
});

client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command))
        return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});


mongoose
    .connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(port, () => client.login(process.env.TOKEN)))
    .catch(err => console.log(err))

