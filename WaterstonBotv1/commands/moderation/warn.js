const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name: "warn",
  category: "Moderation",
  description: "Warns a user for a reason",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ Invalid user`).then(r => r.delete({
      timeout: 10000
    }))
    let member = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if (reason.replace(/ /g, '').trim() === '') reason = `Invalid Reason`
    let warnObj = {
      warned: member.user.id,
      warner: message.author.id,
      reason: reason,
      id: `w${Math.random().toString(36).substr(2, 9)}`
    }
    db.push(`logs.${message.guild.id}`, warnObj)
    let logEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle(`Warning Issued`)
      .setDescription(`**User Warned:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}\n**Case ID:** ${warnObj.id}`)
      .setTimestamp()
      .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    client.channels.resolve('709074878912790529').send(logEmbed)
    let warnedEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle(`"Warning Issued"`)
      .setDescription(`Sucessfully issued a warning to <@${member.user.id}> by <@${message.author.id}> for **${reason}.**`)
      .setTimestamp()
      .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    return message.channel.send(warnedEmbed)

  }
}