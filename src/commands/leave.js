module.exports = {
    name: 'leave',
    description: 'Leave a channel',
    execute: async (message, args) => {
        message.member.voice.channel.leave()
    }
};