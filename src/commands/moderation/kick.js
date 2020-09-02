let Discord = require('discord.js')
let db = require('quick.db')

// Role list for permissions
let modRole = message.guild.roles.find("name", "Discord Moderator");
let traineeRole = message.guild.roles.find("name", "Trial Moderator");

module.exports = {
  name: "kick",
  category: "Moderation",
  description: "Remove a user from the server",
  run: async (client, message, args) => {
    if (message.member.roles.has(modRole.id) || message.member.roles.has(traineeRole.id)) { return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
    let member = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if (message.author.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on yourself.`)
    if (reason.replace(/ /g, '').trim() === '') reason = `No reason specified`
    let kickObj = {
      kicked: member.user.id,
      kicker: message.author.id,
      reason: reason,
      id: `k${Math.random().toString(36).substr(2, 9)}`
    }
    await member.kick(reason)
    db.push(`logs.${message.guild.id}`, kickObj)
    let logEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Kick Log Issued")
      .setDescription(`**User Kicked:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}\n**Case ID:** ${kickObj.id}`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    let kickedEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Kick Log Issued")
      .setDescription(`Sucessfully kicked <@${member.user.id}>.`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    client.channels.resolve('709074878912790529').send(logEmbed)
    return message.channel.send(kickedEmbed)
  }
}
