module.exports = {
    name: 'tts-insult',
    description: 'Insults someone with text-to-speech',
    execute: async (message, args, client) => {
        try {
            const broadcast = client.voice.createBroadcast();
            const discordTTS = require("discord-tts");
            const axios = require('axios');

            const body = {
                for: args[0]
            }
            await axios.post(url + "insults/rand", body)
                .then(async res => {
                    await message.member.voice.channel.join()
                        .then(connection => {
                            broadcast.play(discordTTS.getVoiceStream(res.data.insulto));
                            connection.play(broadcast);
                        });
                })
                .catch(err => {
                    if (err.request.res.statusCode === 404)
                        message.channel.send("The person that you want to insult doesn't exist!");
                    else
                        message.channel.send("Error 500, server error");
                })
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    }
}