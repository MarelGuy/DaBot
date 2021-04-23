

module.exports = {
    name: 'tts-insulta',
    description: 'Ti da la latenza',
    execute: async (message, args, client) => {
        try {
            const broadcast = client.voice.createBroadcast();
            const insultModel = require("../models/insultModel")
            const discordTTS = require("discord-tts");
            const insulti = await insultModel.find({ for: args[0].toString() })
            const insulto = await insulti[Math.floor(Math.random() * insulti.length)].insulto.toString()

            await message.member.voice.channel.join()
                .then(connection => {
                    broadcast.play(discordTTS.getVoiceStream(insulto));
                    const dispatcher = connection.play(broadcast);
                });
        } catch (err) {
            console.log(err)
        }
    }
}