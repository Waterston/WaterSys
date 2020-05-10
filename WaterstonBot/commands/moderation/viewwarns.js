let Discord = require('discord.js')
let db = require('quick.db')

module.exports = {
  name: "viewwarns",
  category: "Moderation",
  description: "Lets you view warnings for a user",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`Insufficient Permissions`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`Invalid User`).then(r => r.delete({
      timeout: 10000
    }))
    let member = message.mentions.members.first()
    let warns = db.fetch(`logs.${message.guild.id}`).filter(r => r.warned === member.user.id && r.id.startsWith('w'))
    let desc = `**Warning History** (${member.user.id})\n`
    for (let warn of warns) {
      desc += `\n**Content Moderator:** <@${warn.warner}>\n**Reason:** ${warn.reason}\n**Case ID:** ${warn.id}\n`
    }
    let embed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(member.user.tag, member.user.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("WaterstonSystems Warnings History")
      .setDescription(desc)
      .setFooter(`Warnings for ${member.user.tag}`, client.user.displayAvatarURL()) 
      .setTimestamp()
    return message.channel.send(embed)
  }
}