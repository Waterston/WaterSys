const Discord = require('discord.js');

module.exports = {
    name: "furryrate",
    aliases: ['furrate', 'fr'],
    category: "fun",
    description: "See what percentage of the specified user is a furry",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`Placeholder Rate`)
        .setDescription(`<@${member.user.id}> is {placeholder} placeholder.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
