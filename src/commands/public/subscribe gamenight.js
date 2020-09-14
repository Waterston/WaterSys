const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "subscribe gamenight",
    category: "moderation",
	description: "Mutes a user",
	guildOnly: true,
	usage: "<mention, id>",
    run: async (client, message, args) => {

	let muterole = message.guild.roles.cache.find(r => r.name === "Gamenight Subscriber");
	if (!muterole) return message.reply("r nil")
	    
	 let gnsubembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Added Subscription`)
        .setDescription(`Sucessfully added your subscription to **Gamenight Subscriber**`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

	    
	 message.author.roles.add(muterole.id)
	 message.channel.send(gnsubembed)
  }
}; 
