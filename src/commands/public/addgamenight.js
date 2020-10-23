const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
  name: "gamenight",
  category: "public",
	description: "Toggle whether you are subscribed to gamenight events",
	guildOnly: true,
  run: async (client, message, args) => {

	let gamenightrole = message.guild.roles.cache.find(r => r.name === "Gamenight Subscriber");
  if (!gamenightrole) return message.reply(":warning: An error occurred in finding `Gamenight Subscriber` role. Please contact a server administrator.")
  
  let gnaddedembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTitle(`Added`)
      .setDescription(`Sucessfully added you to **Gamenight Subscriber**`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 

  let gnremovedembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTitle(`Removed`)
      .setDescription(`Sucessfully removed you from **Gamenight Subscriber**`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
  
  if(message.member.roles.cache.has(gamenightrole)){
    message.channel.send(gnremovedembed)
    message.member.roles.remove(amenightrole.id).catch(console.error);
  } else {
    message.channel.send(gnaddedembed)
    message.member.roles.add(amenightrole.id).catch(console.error);
  }
	    
	 //message.member.roles.add(gamenightrole.id)
	 //message.channel.send(gnaddedembed)
  }
}; 
