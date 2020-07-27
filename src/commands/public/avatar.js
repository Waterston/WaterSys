const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['av', 'pfp'],
    category: "info",
    description: "Returns the specified user's profile picture",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let member = msg.mentions.members.first() || msg.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        //.setAuthor(${member.user.username}, member.user.avatarURL)
        .setTitle("Avatar")
        .setImage(member.user.avatarURL({ format: 'png', dynamic: true, size: 256 }))
        .setFooter("WaterstonSystems", client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
