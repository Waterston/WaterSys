const Discord = require('discord.js');

module.exports = {
    name: "gayrate",
    aliases: ['gay', 'gr'],
    category: "fun",
    description: "See what percentage of the specified user is gay",
    usage: "<mention, id>",
    guildOnly: true,
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Gay Rate`)
        .setDescription(`<@${member.user.id}> is ${Math.floor(Math.random() * 101)}% gay. :rainbow_flag:`)
        .addField("Disclaimer", "We do not allow harassment based on someone's sexual orentation. If someone is harassing you or someone else, let a moderator know.", false)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
