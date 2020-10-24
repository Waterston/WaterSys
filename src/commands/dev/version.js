const Discord = require('discord.js');

module.exports = {
    name: "version",
    aliases: ['ver', 'v'],
    category: "dev",
    hidden: true,
    description: "Returns with the bot's current version number",
    ownerOnly: true,
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`${client.user.username} Version`)
        .setDescription(`Currently on ${process.env.npm_package_version}`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
