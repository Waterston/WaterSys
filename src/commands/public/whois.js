const Discord = require('discord.js');

module.exports = {
    name: "whois",
    aliases: ['dwhois', 'dinfo', 'discord'],
    category: "public",
    description: "Identify and retrieve the specified user's Discord information",
    usage: "<mention, id>",
    guildOnly: true,
    run: async (client, message, args) => {

        let member = message.mentions.members.first() || message.member || message.guild.members.cache.get(args[0]);
        if (!member){ return message.channel.send(`:warning: No user specified, please mention a user or provide a valid ID.`).then(msg => msg.delete({ timeout: 10000 }))}
        // Sets the variable

        function checkDays(date) {
          let now = new Date();
          let diff = now.getTime() - date.getTime();
          let days = Math.floor(diff / 86400000);
          return days + (days == 1 ? " day" : " days") + " ago";
          };

        // Define the first embed, which will contain Discord info.
        const whoembed = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}`)
        .setDescription(`<@${member.user.id}>`)
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true, size: 256 }))
        .addField("User ID", `${member.user.id}`, false)
        .addField("Current Status", `${member.user.presence.status.toUpperCase()}`, false)
        .addField("Joined", `${member.joinedAt.toLocaleDateString()} (${checkDays(member.joinedAt)})`, true)
        .addField("Creation Date", `${member.user.createdAt.toLocaleDateString()} (${checkDays(member.user.createdAt)})`, true)
        .setColor("#7289da")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(whoembed)
    }
}