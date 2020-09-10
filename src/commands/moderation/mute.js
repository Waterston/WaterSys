const { stripIndents } = require('common-tags');
let Discord = require('discord.js')
let ms = require('ms')

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes a user",
    run: async (client, message, args) => {
	const member = message.mentions.members.first()
	if (!member) return
	
	let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
	if (!muterole) return message.reply("mr nil")
	
	let time = args[2];
	if (!time){
		return message.reply("time nil")
	 }
	    
	 member.roles.add(muterole.id)
	    
	message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`);
	    
	 setTimeout(function(){
		member.roles.remove(muterole.id);
		message.channel.send(`nmmuted`)
	  }, ms(time));
   
  }
}; 
