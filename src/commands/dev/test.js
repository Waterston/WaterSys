const Discord = require('discord.js');

module.exports = {
    name: "test",
    aliases: ['testing', 'base'],
    category: "dev",
    description: "Test command",
    usage: "<mention, id>",
    ownerOnly: true,
    run: async (client, message, args) => {
        message.channel.send("Test command executed.")
    }
}