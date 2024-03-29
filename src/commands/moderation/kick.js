const Discord = require('discord.js')
const kicks = require('../.././models/kicks.js')

module.exports = {
  name: "kick",
  category: "Moderation",
  description: "Kick a user from the server",
  guildOnly: true,
  usage: "<mention, id> <reason>",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.some(role => role.name === 'Discord Moderator')) return; //message.channel.send(`⛔ Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))
    let member = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
    if (!member){ return message.channel.send(`:warning: No user specified, please mention a user or provide a valid ID.`).then(msg => msg.delete({ timeout: 10000 }))}
	let reason = args.slice(1).join(' ')
	if(!reason) reason = `No reason specified`
	if (message.author.id === member.user.id) return message.channel.send(`:no_entry: You cannot run this command on yourself.`)
    if (client.user.id === member.user.id) return message.channel.send(`:no_entry: You cannot run this command on the bot.`).catch(console.error);
	
      kicks.findOne(
      { guildID: message.guild.id, userID: member.id },
      async (err, data) => {
        if(err) console.log(err);
        if(!data) {
          let newLogs = new kicks({
          guildID: message.guild.id,
          userID: member.id,
          Kicks: [
            {
              modID: message.author.id,
              reason: reason,
              time: message.createdAt
            },
          ],
        })
        newLogs.save()
      } else {
        data.Kicks.push({
              modID: message.author.id,
              reason: reason,
              time: message.createdAt
         })
        data.save();


        }

})
    
	const logEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Kick Issued`)
	      .setDescription(`**User Kicked:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}`)
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	const warnedEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Kick Issued`)
	      .setDescription(`Sucessfully issued a kick to <@${member.user.id}>.`)
	      .addFields(
			  { name: 'Reason', value: `${reason}`, inline: true },
			  { name: 'Content Moderator', value: `<@${message.author.id}>`, inline: true },
		    )
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	
	const usermessageEmbed = new Discord.MessageEmbed()
	      .setColor("#0084ff")
	      .setAuthor(message.author.tag, message.author.displayAvatarURL({
		dynamic: true
	      }))
	      .setTitle(`Kick Received`)
	      .setDescription('This is a notification that you have been kicked in ' + `**${message.guild.name}**.` + '\n\nTo appeal this, please utilize the appeal command by running `!appeal (warning/kick) (reason)`.')
	      .addFields(
			  { name: 'Reason', value: `${reason}`, inline: true },
			  { name: 'Content Moderator', value: `<@${message.author.id}>`, inline: true },
		    )
	      .setTimestamp()
	      .setFooter(client.user.username, client.user.displayAvatarURL()) 
	const channel = client.channels.cache.find(channel => channel.name === "incident-logs")
	message.channel.send(warnedEmbed)
	    channel.send(logEmbed);
    		member.send(usermessageEmbed).catch((error) => {
     		 return
   	 });
	      await member.kick({ reason: '${reason}' })
  	  //await member.kick(reason)
	}
	  }	
