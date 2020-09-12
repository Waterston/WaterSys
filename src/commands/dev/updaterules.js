//Bandelqs Creation

const { stripIndents } = require('common-tags');
let Discord = require('discord.js')
let ms = require('ms')

module.exports = {
    name: "updaterules",
    category: "moderation",
	description: "Updates rules",
	guildOnly: true,
	usage: "<mention, id>",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let mutedembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Mute Issued`)
        .setDescription(`**User Muted:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Time:** ${ms(ms(time))}\n**Reason:** ${reason}`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 
        let mutedlogembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Mute Issued`)
        .setDescription(`Sucessfully issued a mute to <@${member.user.id}>.`)
       
	 message.channel.send(mutedlogembed)
         client.channels.resolve('709074878912790529').send(mutedembed)
	    
	message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`);
	    
	 setTimeout(function(){
		member.roles.remove(muterole.id, reason);
	  }, ms(time));
   
  }
}; 
