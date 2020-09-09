const Discord = require('discord.js');

module.exports = {
    name: "version",
    aliases: ['ver', 'v'],
    category: "dev",
    description: "Returns with the bot's current version number",
    run: async (client, message, args) => {
