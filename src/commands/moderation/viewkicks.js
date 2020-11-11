const Discord = require('discord.js')
const Kicks = require('../.././models/kicks.js')

module.exports = {
  name: "viewkicks",
  aliases: ['kicks', 'kicklogs'],
  category: "Moderation",
  description: "Lets you view kicks for a specified user",
  guildOnly: true,
	usage: "<mention, id>",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return; //message.channel.send(`⛔ Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))
	  if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    	}))
	const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member
	
	const nokicks = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Kick History`)
	       .setTimestamp()
	      .setDescription(`<@${user.user.id}> has no previous kick history.`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	Kicks.find(
	  {guildID: message.guild.id, userID: user.id}, 
	  async (err, data) => {

	    const gettingwarns = data.map((size) => size.Kicks.length)
	    if(gettingwarns < 1) return message.channel.send(nokicks)

	    const kicksEmbed = new Discord.MessageEmbed()
	    .setColor("#0084ff")
	    .setTitle(`Kick(s) History (${user.id})`)
	    .setTimestamp()
	    .setFooter(`Total Kicks: ${gettingwarns}`, client.user.displayAvatarURL()) 
	    .setDescription(data.map((d) => {
	      return d.Kicks.map(
		    (w, i) =>
			  `\`\`\`Content Moderator: ${message.guild.members.cache.get(w.modID).user.tag}\nReason: ${w.reason}\nLog Number: ${i + 1}\nTimestamp: ${w.time}\`\`\``).join(" ")

	    }))
	    message.channel.send(kicksEmbed)
	  })
	  }
	}
