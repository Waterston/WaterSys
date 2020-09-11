let Discord = require('discord.js')
let db = require('quick.db')

module.exports = {
  name: "viewkicks",
  aliases: ['kicks', 'kicklogs'],
  category: "Moderation",
  description: "Lets you view kicks for a specified user",
  guildOnly: true,
	usage: "<mention, id>",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
    let member = message.mentions.members.first()
    let kicks = db.fetch(`logs.${message.guild.id}`).filter(r => r.kicked === member.user.id && r.id.startsWith('k'))
    let desc = `**Kick History** (${member.user.id})\n`
    for (let kick of kicks) {
      desc += `\n**Content Moderator:** <@${kick.kicker}> (${kick.kicker.id})\n**Reason:** ${kick.reason}\n**Case ID:** ${kick.id}\n`
    }
    let embed = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setAuthor(member.user.tag, member.user.displayAvatarURL({
      dynamic: true
    }))
    .setTitle("Kick History")
    .setDescription(desc)
    .setFooter(`Kicks for ${member.user.tag}`, client.user.displayAvatarURL()) 
    .setTimestamp()
    return message.channel.send(embed)
  }
}
