const Discord = require('discord.js');

module.exports = {
    name: "simprate",
    aliases: ['simp', 'sr', 'simping'],
    category: "fun",
    description: "See what percentage of the specified user is a simp",
    usage: "<mention, id>",
    guildOnly: true,
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member
        let rate = `${Math.floor(Math.random() * 101)}% simp`

        // Rig the ratings for specific users.
        if (member.user.id === "668529679732572170") { rate = "101% simp" } // RGB_Flames

        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Simp Rate`)
        .setDescription(`<@${member.user.id}> is ${rate}.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
