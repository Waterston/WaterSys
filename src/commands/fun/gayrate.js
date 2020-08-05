const Discord = require('discord.js');

module.exports = {
    name: "gayrate",
    aliases: ['gay', 'gr'],
    category: "fun",
    description: "See what percentage of the specified user is gay",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`Gay Rate`)
        .setDescription(`<@${member.user.id}> is ${Math.floor(Math.random() * 101)}% gay.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
