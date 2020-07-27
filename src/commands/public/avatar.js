const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av', 'pfp'],
    category: "info",
    description: "Returns the specified user's profile picture",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
        timeout: 10000
        }))
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle("Avatar")
        .setImage(`${user.avatarURL}`, true)
        message.channel.send(embed)
    }
}
