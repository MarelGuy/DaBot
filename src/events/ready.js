module.exports = {
    name: 'ready',
    once: true,
    execute(client, port) {
        try {
            const fs = require("fs")
            client.user.setPresence({
                status: 'ONLINE',
                activity: {
                    name: "The Master of Unlocking.",
                    type: "STREAMING"
                }
            });
            const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${file}`);
                client.commands.set(command.name, command);
            }
            console.log(`Running on port ${port}. Also, the bot is logged as ${client.user.tag}`)
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    },
};