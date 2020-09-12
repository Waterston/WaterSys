const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "updateserverinfo",
    category: "moderation",
	description: "Updates server info",
	guildOnly: true,
	usage: "<mention, id>",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let usb1 = new Discord.MessageEmbed()
        .setColor("#0084ff")
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/746430272224100522/754133120189464616/image0.png?width=1362&height=504`)
	 
	let usb2 = new Discord.MessageEmbed()
	.setTitle(`Official Waterston Links`)
	.setDescription(`Welcome to Waterston, pronounced "water-stone." We offer a variety of monuments and attractions on the coastline of Baylor County and more! Join our state to be involved in departments ranging from law enforcement agencies to our fire department or transportation!\n\n**For more updated and live statistics on the server or more information, run !links or !serverinfo in #bot-commands!**`)
  .setColor("#0084ff")
  .addFields(
		{ name: 'Discord Server Invite', value: `https://discord.gg/uQpYBZr`, inline: false },
		{ name: 'Roblox Group', value: `https://www.roblox.com/groups/5231364`, inline: false },
    { name: 'Punishment Database', value: `https://trello.com/b/8W2LM4eD`, inline: false }
	 )
	

	

	
	 
         client.channels.resolve('754166898366611528').send(usb1)
	 client.channels.resolve('754166898366611528').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)
	 client.channels.resolve('754166898366611528').send(usb2)
  	 client.channels.resolve('754166898366611528').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)

	   
  }
}; 
