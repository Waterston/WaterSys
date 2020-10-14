const db = require('quick.db')
const Discord = require('discord.js')
const warn = require('../.././models/warnings.js')
module.exports = {
  name: "warn",
  category: "Moderation",
  description: "Warns a user for a reason",
  guildOnly: true,
  usage: "<mention, id>",
  run: async (client, message, args) => {
   if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
   if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
	const user = message.mentions.members.first() || message.guild.members.cache.get(args[1])
	//if (message.author.id === user.user.id) return message.channel.send(`⛔ You cannot run this command on yourself.`)
	if (client.user.id === user.user.id) return message.channel.send(`⛔ You cannot run this command on the bot.`).catch(console.error);
	  
	let reason = args.slice(1).join(' ')
	if (reason.replace(/ /g, '').trim() === '') reason = `No reason specified`
	
	  warn.findOne(
	      { guildID: message.guild.id, userID: user.id },
	      async (err, data) => {
		if(err) console.log(err);
		if(!data) {
		  let newLogs = new warn({
		  guildID: message.guild.id,
		  userID: user.id,
		  Warns: [
		    {
		      modID: message.author.id,
		      reason: reason,
		      time: message.createdAt
		    },
		  ],
		})
		newLogs.save()
	      } else {
		data.Warns.push({
		      modID: message.author.id,
		      reason: reason,
		      time: message.createdAt
		 })
		data.save();


		}

	})
	  
	  
	const logEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Warning Log Issued`)
	      .setDescription(`**User Warned:** <@${user.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	const warnedEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Warning Log Issued`)
	      .setDescription(`Sucessfully issued a warning to <@${user.user.id}>.`)
	      .addFields(
			  { name: 'Reason', value: `${reason}`, inline: true },
			  { name: 'Content Moderator', value: `<@${message.author.id}>`, inline: true },
		    )
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	const usermessageEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Warning Received`)
	      .setDescription('This is a notification that you have been warned in' + `${message.guild.name}.` + '\n\nTo appeal this, please utilize the appeal command by running `!appeal (warning/kick) (reason)`.')
	      .addFields(
			  { name: 'Reason', value: `${reason}`, inline: true },
			  { name: 'Content Moderator', value: `<@${message.author.id}>`, inline: true },
		    )
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	const channel = client.channels.cache.find(channel => channel.name === "incident-logs")
	message.channel.send(warnedEmbed)
	    channel.send(logEmbed);
    		user.send(usermessageEmbed).catch((error) => {
     		 return
   	 });

	}
	  }	
