let Discord = require('discord.js')
let db = require('quick.db')


module.exports = {
  name: "ban",
  category: "Moderation",
  description: "Bans a user from the server",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
    let member = message.mentions.members.first()
    let reason = args.slice(1).join(' ')
    if (reason.replace(/ /g, '').trim() === '') reason = `No reason specified`
    if (message.author.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on yourself.`)
    await member.ban()
    let blogEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Ban Issued")
      .setDescription(`**User Banned:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}`)
      .setTimestamp()
      .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    let banembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Ban Issued")
      .setDescription(`Sucessfully banned <@${member.user.id}> by <@${message.author.id}> for **${reason}.**`)
      .setTimestamp()
      .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    client.channels.resolve('709074878912790529').send(blogEmbed)
    return message.channel.send(banembed)
  }
}
