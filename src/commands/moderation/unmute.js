const { stripIndents } = require('common-tags');
const Discord = require('discord.js')

module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Unmutes the specified user",
    guildOnly: true,
    usage: "<mention, id>",
    run: async (client, message, args) => {
      if (!message.member.roles.cache.some(role => role.name === 'Discord Moderator')) return; //message.channel.send(`⛔ Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(`⚠️ No user specified, please mention the user.`)
        
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason specified"

        let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
        if (!muterole) return message.reply(":warning: An error occurred in finding `Muted` role. Please contact a server administrator.")

        let unmutedembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Unmute Issued`)
        .setDescription(`**User Unmuted:** <@${mutee.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 
        
        let unmutedlogembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Unmute Issued`)
        .setDescription(`Sucessfully issued an unmute to <@${mutee.user.id}> by <@${message.author.id}> for **${reason}.**`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

        mutee.roles.remove(muterole.id, reason).catch(console.error).then(() => {
            message.channel.send(unmutedlogembed)
            client.channels.cache.find(channel => channel.name === "incident-logs").send(unmutedembed)
        })
  }
}; 
