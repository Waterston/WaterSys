const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "updateserverinfo",
    category: "dev",
	description: "Updates server info",
	guildOnly: true,
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let usb1 = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setImage('.../assets/png/baylorcounty.png')
	 
	let usb2 = new Discord.MessageEmbed()
	.setTitle(`Official Waterston Links`)
	.setDescription(`Welcome to Waterston, pronounced "water-stone." We offer a variety of monuments and attractions on the coastline of Baylor County and more! Join our state to be involved in departments ranging from law enforcement agencies to our fire department or transportation!\n\n**For more updated and live statistics on the server or more information, run !links or !serverinfo in #bot-commands!**`)
	.setColor("#00a2cb")
  	.addFields(
		{ name: 'Discord Server Invite', value: `https://discord.io/waterston`, inline: false },
		{ name: 'Roblox Group', value: `https://www.roblox.com/groups/5231364`, inline: false },
    	{ name: 'Punishment Database', value: `https://trello.com/b/8W2LM4eD`, inline: false }
	 )
	
	 client.channels.resolve('754166898366611528').send(usb1)
	 client.channels.resolve('709052688368664688').send('.../assets/gif/rainbowline.gif')
	 client.channels.resolve('754166898366611528').send(usb2)
	 client.channels.resolve('709052688368664688').send('.../assets/gif/rainbowline.gif')

	   
  }
}; 
