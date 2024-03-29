const Discord = require('discord.js');
const config = require("../../../config.json");

module.exports = {
    name: "links",
    aliases: ['link', 'invite', 'roblox'],
    category: "public",
    description: "Posts the most updated links for Vena Studios content",
    usage: "<mention, id>",
    run: async (client, message, args) => {
       if (message.guild.id != config.featuredguildID) return;
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor("#0084ff")
        .setTitle("Links")
        .addField("Server", "https://discord.gg/dhusNR9rvv", false)
        .addField("Roblox Group", "https://www.roblox.com/groups/9180170", false)
        .addField("Website", "https://watersys.pearo.icu", false)
        .addField("Bot Invite", "Coming soon", false)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
