module.exports = {
    name: 'help',
    description: 'Insulti una persona',
    execute: async (message, args) => {
        if (args.length === 0) {
            message.channel.send("- HELP (Prefix: $) -\n\n**You can do $help <command> for further informations**\n- insulta <name> (ale/cris/teo/loris/ivan)\n- aggiungi-insulto <name> <insult> (ale/cris/teo/loris/ivan)");
        }

        switch (args[0]) {
            case "insulta":
                message.channel.send("- HELP -\n\nUsage: insulta <name>\nThis command needs the name of the person that you want to insult, for now the only persons available are ale, cris, teo and loris.");
                break;
            case "aggiungi-insulto":
                message.channel.send("- HELP -\n\nUsage: aggiungi-insulto <name> <insult>\nYou need the name of which person you want to insult, with of course, an insult.");
                break;
        }
    }
};