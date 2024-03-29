const Discord = require('discord.js')

module.exports = {
  name: "ban",
  category: "Moderation",
  description: "Bans a user from the server",
  guildOnly: true,
  usage: "<mention, id> <reason>",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.some(role => role.name === 'Discord Moderator')) return; //message.channel.send(`⛔ Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))
    let member = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
    if (!member){ return message.channel.send(`:warning: No user specified, please mention a user or provide a valid ID.`).then(msg => msg.delete({ timeout: 10000 }))}
    let reason = args.slice(1).join(' ')
    if(!reason) reason = `No reason specified`
    if (message.author.id === member.user.id) return message.channel.send(`:no_entry: You cannot run this command on yourself.`)
    if (client.user.id === member.user.id) return message.channel.send(`:no_entry: You cannot run this command on the bot.`).catch(console.error);
    await member.ban()

    // Builds the embed for mod logs channel	  
    let blogEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle("Ban Issued")
      .setDescription(`**User Banned:** <@${member.user.id}>`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    // Notifies the moderator that the command was executed
    let banembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle("Ban Issued")
      .setDescription(`Successfully banned <@${member.user.id}>.`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )    
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    client.channels.cache.find(channel => channel.name === "incident-logs").send(blogEmbed)
    return message.channel.send(banembed)
  }
}
