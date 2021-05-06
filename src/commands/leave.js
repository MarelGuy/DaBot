module.exports = {
    name: 'leave',
    description: 'Leave a channel',
    execute: async (message, args, client) => {
        try {
            const chn = await message.member.voice.channel;
            if (chn === null) {
                message.channel.send("You are not in a voice channel!")
            } else {
                if (await client.voice.connections.some((connection) => connection.channel.id === message.member.voice.channelID)) {
                    await chn.leave()
                    message.react('✅')
                }
                else {
                    if (await client.voice.connections.some((connection) => connection.channel.id))
                        message.channel.send('You need to be in the same channel as the bot!')
                    else
                        message.channel.send("I'm not in a voice channel!")
                }
            }
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    }
}