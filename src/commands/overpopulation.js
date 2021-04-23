module.exports = {
    name: 'overpopulate',
    description: 'Insulti su ale',
    execute: async (message, args) => {
        if (args.length === 1) {
            message.channel.send(`Non ti è mai venuto in mente che questo pianeta è sovrappopolato? Solo una manciata di umani conta davvero. Tutti gli altri sono solo tanta erbaccia. Quindi ora devo separare questa erbaccia dal grano. E con ${args[0]}, posso finalmente farcela!`);
        } else {
            message.channel.send("Must provide just one argument");
        }
    }
};