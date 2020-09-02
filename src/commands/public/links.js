const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    aliases: ['sinfo', 'server'],
    category: "public",
    description: "Retrieve information for the current server",
    usage: "<mention, id>",
    run: async (client, message, args) => {
       if ( message.guild.id === '659451316707524618') {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor("#0084ff")
        .addTitle("Links")
        .addField("Server", "N/A", true)
        .addField("Roblox Group", "https://www.roblox.com/groups/5231364/", true)
        .addField("Website", "N/A", true)
        .addField("Bot Invite", "N/A", true)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
