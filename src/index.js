const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const fs = require("fs")

const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'))

const express = require('express');
const app = express();

const port = process.env.PORT

const mongoose = require('mongoose')

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client, port));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}


mongoose
    .connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(port, () => client.login(process.env.TOKEN)))
    .catch(err => console.log(err))

