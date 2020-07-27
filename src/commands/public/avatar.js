const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av', 'pfp'],
    category: "info",
    description: "Returns the specified user's profile picture",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let member = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle("Avatar")
        .setImage(member.avatarURL)
        message.channel.send(embed)
    }
}