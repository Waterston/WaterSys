const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    aliases: ['sinfo', 'server'],
    category: "public",
    description: "Retrieve information for the current server",
    usage: "<mention, id>",
    run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Access denied.`).then(r => r.delete({timeout: 10000}))
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`Server Information`)
        .setDescription(`Placeholder`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
