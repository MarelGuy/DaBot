module.exports = {
    name: 'bonk',
    description: 'Ti da la latenza',
    execute: async (message, args, client) => {
        try {
            const broadcast = client.voice.createBroadcast();

            await message.member.voice.channel.join()
                .then(connection => {
                    broadcast.play("https://www.freesoundslibrary.com/wp-content/uploads/2021/03/bonk-sound-effect.mp3");
                    connection.play(broadcast);
                });
        } catch (err) {
            console.log(err)
        }
    }
}