const Discord = require('discord.js')
const Warns = require('../.././models/warnings.js')
module.exports = {
  name: "viewwarns",
  aliases: ['warns', 'warnings'],
  category: "Moderation",
  description: "Get all warnings of a specified user",
  guildOnly: true,
  usage: "<mention, id>",
  run: async (client, message, args) => {
	if (!message.member.roles.cache.some(role => role.name === 'Discord Moderator')) return; //message.channel.send(`⛔ Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))
      if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
        timeout: 10000
        }))

	const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member

	const nowarns = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Warning History`)
	       .setTimestamp()
	      .setDescription(`<@${user.user.id}> has no previous warning history.`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 

	Warns.find(
	  {guildID: message.guild.id, userID: user.id}, 
	  async (err, data) => {

	    const gettingwarns = data.map((size) => size.Warns.length)
	    if(gettingwarns < 1) return message.channel.send(nowarns)

	    const warningsEmbed = new Discord.MessageEmbed()
	    .setColor("#0084ff")
	    .setTitle(`Warning(s) History (${user.id})`)
	    .setTimestamp()
	    .setFooter(`Total Warnings: ${gettingwarns}`, client.user.displayAvatarURL()) 
	    .setDescription(data.map((d) => {
	      return d.Warns.map(
		    (w, i) =>
			  `\`\`\`Content Moderator: ${message.guild.members.cache.get(w.modID).user.tag}\nReason: ${w.reason}\nLog Number: ${i + 1}\nTimestamp: ${w.time}\`\`\``).join(" ")

	    }))
	    message.channel.send(warningsEmbed)
	  })
	  }
	}
