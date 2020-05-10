let Discord = require('discord.js')
let db = require('quick.db')


module.exports = {
  name: "kick",
  category: "Moderation",
  description: "Remove a user from the server",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
    let member = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if (reason.replace(/ /g, '').trim() === '') reason = `No reason specified`
    let kickObj = {
      kicked: member.user.id,
      kicker: message.author.id,
      reason: reason,
      id: `k${Math.random().toString(36).substr(2, 9)}`
    }
    await member.kick()
    db.push(`logs.${message.guild.id}`, kickObj)
    let logEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Kick Issued")
      .setDescription(`**User Kicked:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}\n**Case ID:** ${kickObj.id}`)
      .setTimestamp()
      .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    let kickedEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Kick Issued")
      .setDescription(`Sucessfully kicked <@${member.user.id}> by <@${message.author.id}> for **${reason}.**`)
      .setTimestamp()
      .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    client.channels.resolve('709074878912790529').send(logEmbed)
    return message.channel.send(kickedEmbed)
  }
}
