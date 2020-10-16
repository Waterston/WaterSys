let Discord = require('discord.js')
let db = require('quick.db')


module.exports = {
  name: "ban",
  category: "Moderation",
  description: "Bans a user from the server",
  guildOnly: true,
  usage: "<mention, id>",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({timeout: 10000}))
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(' ')
    if (reason.replace(/ /g, '').trim() === '') reason = `No reason specified`
    if (message.author.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on yourself.`)
    if (client.user.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on the bot.`).catch(console.error);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`⛔ An error occurred while banning. No action was taken.`)
    await member.ban()

    let blogEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Ban Issued")
      .setDescription(`**User Banned:** <@${member.user.id}>`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    let banembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle("Ban Issued")
      .setDescription(`Successfully banned <@${member.user.id}>.`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )    
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    client.channels.resolve('709074878912790529').send(blogEmbed)
    return message.channel.send(banembed)
  }
}
