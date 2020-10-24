const Discord = require('discord.js');
const config = require("../../../config.json");

module.exports = {
    name: "links",
    aliases: ['link', 'invite', 'roblox'],
    category: "public",
    description: "Posts the most updated links for Waterston content",
    usage: "<mention, id>",
    run: async (client, message, args) => {
       if (message.guild.id !== config.featuredguildID) return;
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor("#0084ff")
        .setTitle("Links")
        .addField("Server", "https://discord.io/waterston", false)
        .addField("Roblox Group", "https://www.roblox.com/groups/5231364", false)
        .addField("Website", "Coming soon", false)
        .addField("Bot Invite", "Coming soon", false)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
