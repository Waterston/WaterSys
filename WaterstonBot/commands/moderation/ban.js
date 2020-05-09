const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Bans a player from the server",
    usage: "<mention, id>",
    run: async (client, message, args) => {

        if (!message.member.roles.find(r => r.name === "Discord Moderator")) return
        let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
        if (!banMember) return
        let reason = args.slice(1).join(" ");
        if (!message.member.roles.find(r => r.name === "Discord Moderator")) return
        message.delete()
        try {
            await banMember.send(`You have been banned from Waterston for violating our server guidelines. Moderator Note: ${reason}`);
          } catch (e) {
          }
        message.guild.ban(banMember, { days: 1, reason: reason}).catch(err => console.log(err))
        message.channel.send(`:no_entry: | **${banMember.user.tag}** has been banned from Waterston.`)
        let embed = new RichEmbed()
        .setColor("#ff3333")
        .setAuthor(message.author.username)
        .setTimestamp()
        .setFooter("Waterston Systems", message.guild.iconURL)
        .setDescription(`:white_check_mark: **Banned: ** ${banMember.user}\n:newspaper: **Reason: ** ${reason}\n:hammer: **Moderator: ** ${message.member}`)

        let sChannel = message.guild.channels.find(c => c.name === "incident-logs")
        sChannel.send(embed)









        
    }
}
