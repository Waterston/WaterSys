const { stripIndents } = require('common-tags');
let Discord = require('discord.js')
let ms = require('ms')

module.exports = {
    name: "mute",
    category: "moderation",
	description: "Mutes a user",
	guildOnly: true,
	usage: "<mention, id>",
	
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('709047575180869663')) return;  //message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({timeout: 10000}))
       let member = message.mentions.members.first()

        if (message.author.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on yourself.`)
	if (client.user.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on the bot.`).catch(console.error);
	    
	let reason = args.slice(2).join(" ");
        if(!reason) reason = "No reason specified"
	
	let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
	if (!muterole) return message.reply(":warning: An error occurred in finding `Muted` role. Please contact a server administrator.")
	
	let time = args[1];
	if (!time){
		return message.reply(":warning: Invalid time.")
	 }
	    
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
        .addFields(
          { name: 'Reason', value: `${reason}`, inline: true },
	  { name: 'Time', value: `${ms(ms(time))}`, inline: true },
          { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
        )
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

	    
	 member.roles.add(muterole.id, reason)
	 message.channel.send(mutedlogembed)
         client.channels.resolve('757443329582563410').send(mutedembed)
	    
	message.channel.send(`${member.user.tag} has now been muted for ${ms(ms(time))}`);
	    
	 setTimeout(function(){
		member.roles.remove(muterole.id, reason);
	  }, ms(time));
   
  }
}; 
