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
        let rate = `${Math.floor(Math.random() * 101)}% gay`

        // Rig the ratings for specific users.
        if (member.user.id === "137663615657312256") { rate = "[redacted]" } // Pear
        if (member.user.id === "668529679732572170") { rate = "101% gay" } // RGB_Flames
        if (member.user.id === "213702181533122560") { rate = "100% gay, but he's not ready to accept that yet" } // Toboo_Racc
        if (member.user.id === "341022841405308931") { rate = "200% gay" } // bowsercube

        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Gay Rate`)
        .setDescription(`<@${member.user.id}> is ${rate}. :rainbow_flag:`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
