const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av', 'pfp'],
    category: "info",
    description: "Returns the specified user's profile picture",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle("Avatar")
        .setTimestamp()
        .setImage(message.author.avatarURL({ dynamic:true }))
        message.channel.send(embed)
    }
}
