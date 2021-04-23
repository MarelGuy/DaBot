module.exports = {
    name: 'join-channel',
    description: 'Entra in un canale',
    execute: async (message, args) => {
        await message.member.voice.channel.join();
    }
};