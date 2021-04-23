module.exports = {
    name: 'overpopulate',
    description: 'Insulti su ale',
    execute: async (message, args) => {
        message.channel.send(`Non ti è mai venuto in mente che questo pianeta è sovrappopolato? Solo una manciata di umani conta davvero. Tutti gli altri sono solo tanta erbaccia. Quindi ora devo separare questa erbaccia dal grano. E con ${args.join(" ")}, posso finalmente farcela!`);
    }
};