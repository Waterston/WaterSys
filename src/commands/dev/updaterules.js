//Bandelqs Creation

const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "updaterules",
    category: "moderation",
	description: "Updates rules",
	guildOnly: true,
	usage: "<mention, id>",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let ure1 = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setImage(`https://media.discordapp.net/attachments/746430272224100522/754133120189464616/image0.png?width=1362&height=504`)
	 
	let ure2= new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setDescription(`**Welcome to the official Baylor County, Waterston!**\n\n**The State of Waterston was founded and created by Bandelqs and Pearism on Roblox.**\n\n\n***The rules are subject to change at any time. By using the server you acknowledge and agree to following all rules listed below.***`)
     
         client.channels.resolve('709052688368664688').send(ure1)
	 client.channels.resolve('709052688368664688').send(ure2)
	   
  }
}; 
