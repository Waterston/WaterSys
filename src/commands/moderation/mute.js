const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes a user",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	if (message.mentions.members.size === 0) return message.channel.send(`⚠️ No user specified, please mention the user.`).then(r => r.delete({
      	timeout: 10000
   	}))
   	let member = message.mentions.members.first()

        if (message.author.id === member.user.id) return message.channel.send(`⛔ You cannot run this command on yourself.`)

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        let muterole = message.guild.roles.cache.find(r => r.name === "Muted");

        let mutedembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Mute Issued`)
        .setDescription(`**User Muted:** <@${member.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}`)
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
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

        member.roles.add(muterole.id, reason).catch(console.error).then(() => {
            message.channel.send(mutedlogembed)
            return client.channels.resolve('709074878912790529').send(mutedembed)
        })
  }
}; 
