const Discord = require('discord.js')
let db = require('quick.db')
const Kicks = require('../.././models/kicks.js')
const Warns = require('../.././models/warnings.js')


module.exports = {
  name: "removewarn",
  aliases: [],
  category: "Moderation",
  description: "Removes a moderation log from a user",
  guildOnly: true,
  usage: "<id>",
  run: async (client, message, args) => {
	  if (!message.member.roles.cache.get('709047575180869663')) return; //message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    const user = args[0]
    const id = args[1]
    
    if (!user) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
	  
	  if (!id) return message.channel.send(`⚠️ No log id specified.`).then(r => r.delete({
      timeout: 10000
    }))
    
    
    
    Warns.findOne(
          {guildID: message.guild.id, userID: user}, 
        async (err, data) => {
          if (err) console.log(err)
            await data.Warns.splice(data.Warns.indexOf(data.Warns[id]), 1)
            data.save()
        })
   
    
        	const removeEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Warn Log Removed`)
	      .setDescription(`Sucessfully removed warn ${id} from <@${user}>.`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	const logEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Warn Log Removed`)
	      .setDescription(`**User:** <@${user}>\n**Content Moderator:** <@${message.author.id}>\n**Status:** *Removed*`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
     	
	const channel = client.channels.cache.find(channel => channel.name === "incident-logs")
	message.channel.send(removeEmbed)
	    channel.send(logEmbed);

  }
}
 
