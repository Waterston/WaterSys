const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av', 'pfp'],
    category: "info",
    description: "Returns the specified user's profile picture",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let user = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.user.id, message.user.displayAvatarURL())
        .setTitle("Avatar")
        .setImage(user.avatarURL)
        message.channel.send(embed)
    }
}
