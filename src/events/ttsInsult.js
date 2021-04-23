

module.exports = {
    name: 'tts-insulta',
    description: 'Insulti una persona',
    execute: async (message, args) => {
        const insultModel = require("../models/insultModel")
        const axios = require("axios");

        const Discord = require('discord.js');
        const client = new Discord.Client();

        const fs = require("fs")

        const insulti = await insultModel.find({ for: args[0].toString() })
        const insulto = await insulti[Math.floor(Math.random() * insulti.length)].insulto.toString()

        const connection = await message.member.voice.channel.join();;

        try {
            const res = await axios.get(`http://api.voicerss.org/?key=1e03cd783b8e42bea4579d4c4d305a75&hl=it-IT&c=MP3&src=${insulto}`)
            connection.play(res.data);
        } catch (err) {
            console.log(err)
        }
    }
}