module.exports = {
    name: 'help',
    description: 'Gives the hellp command',
    execute: async (message, args) => {
        if (args.length === 0) {
            message.channel.send("- HELP (Prefix: ,) -\n\n**You can do ,help <command> for further informations**\n- insult <name>\n- tts-insult <name>\n- add-insult <name> <insult>\n- add-person <name>\n- overpopulate <argument>\n\n**No argument commands:**\n- bonk\n- ping");
        }

        switch (args[0]) {
            case "insult":
                message.channel.send("- HELP -\\n\nUsage: ,insult <name>\nThis command needs the name of the person that you want to insult, for now the only persons available are ale, cris, teo and loris.");
                break;
            case "tts-insult":
                message.channel.send("- HELP -\n\nUsage: ,tts-insult <name>\nThis command needs the name of the person that you want to insult with the text to speech, for now the only persons available are ale, cris, teo and loris.");
                break;
            case "leave":
                message.channel.send("- HELP -\n\nUsage: ,leave \nLeaves the voice chat");
                break;
            case "add-insult":
                message.channel.send("- HELP -\n\nUsage: ,add-insult <name> <insult>\nYou need the name of which person you want to insult, with of course, an insult.");
                break;
            case "add-person":
                message.channel.send("- HELP -\n\nUsage: ,add-person <name>\nAdd a new person to the list of people that can be insulted");
                break;
            case "ping":
                message.channel.send("- HELP -\n\nUsage: ,ping\nGet the latency of the bot (ATTENTION: You might travel trough time!)");
                break;
        }
    }
};