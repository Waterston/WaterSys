const Discord = require('discord.js')
const Kicks = require('../.././models/kicks.js')
const Warns = require('../.././models/warnings.js')


module.exports = {
  name: "removekick",
  aliases: [],
  category: "Moderation",
  description: "Removes a moderation log from a user",
  guildOnly: true,
  usage: "<id>",
  run: async (client, message, args) => {
	if (!message.member.roles.cache.some(role => role.name === 'Discord Moderator')) return; //message.channel.send(`⛔ Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))
    const user = args[0]
    const id = args[1]
        
    if (!user) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      timeout: 10000
    }))
	  
	  if (!id) return message.channel.send(`⚠️ No log id specified.`).then(r => r.delete({
      timeout: 10000
    }))
    
    Kicks.findOne(
          {guildID: message.guild.id, userID: user}, 
        async (err, data) => {
          if (err) console.log(err)
            await data.Kicks.splice(data.Kicks.indexOf(data.Kicks[id]), 1)
            data.save()
        })
    
    	const removeEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Kick Log Removed`)
	      .setDescription(`Sucessfully removed kick ${id} from <@${user}>.`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	const logEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Kick Log Removed`)
	      .setDescription(`**User:** <@${user}>\n**Content Moderator:** <@${message.author.id}>\n**Status:** *Removed*`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
     	
	const channel = client.channels.cache.find(channel => channel.name === "incident-logs")
	message.channel.send(removeEmbed)
	    channel.send(logEmbed);

  }
}
