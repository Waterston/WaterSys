const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av', 'pfp'],
    category: "info",
    description: "Returns the specified user's profile picture",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`${member.user.tag}#${message.author.discriminator}'s Avatar`)
        .setImage(member.user.avatarURL({ format: 'png', dynamic: true, size: 256 }))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
