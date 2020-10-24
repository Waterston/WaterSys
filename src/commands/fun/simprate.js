const Discord = require('discord.js');

module.exports = {
    name: "simprate",
    aliases: ['simp', 'sr', 'simping'],
    category: "fun",
    description: "See what percentage of the specified user is a simp",
    usage: "<mention, id>",
    guildOnly: true,
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Simp Rate`)
        .setDescription(`<@${member.user.id}> is ${Math.floor(Math.random() * 101)}% simp.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
