module.exports = {
    name: 'message',
    execute: async (message, client) => {
        try {
            if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
            const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();
            if (!client.commands.has(command))
                return;
            try {
                client.commands.get(command).execute(message, args, client);
            } catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }
        } catch (err) {
            message.channel.send("The bot encountered an internal error")
        }
    },
};