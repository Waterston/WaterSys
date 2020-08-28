const Discord = require('discord.js');

module.exports = {
    name: "furryrate",
    aliases: ['furrate', 'fr', 'furry'],
    category: "fun",
    description: "See what percentage of the specified user is a furry",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Furry Rate`)
        .setDescription(`<@${member.user.id}> is ${Math.floor(Math.random() * 101)}% furry.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
