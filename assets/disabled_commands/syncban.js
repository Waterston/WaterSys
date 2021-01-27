const Discord = require('discord.js');

module.exports = {
    name: "syncban",
    aliases: ['sban'],
    category: "dev",
    description: "Bans a user from all Waterston guilds.",
    usage: "<user> <reason>",
    ownerOnly: true,
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member){ return message.channel.send(`:warning: No user specified, please mention a user or provide a valid ID.`).then(msg => msg.delete({ timeout: 10000 }))}

        let reason = args.slice(1).join(' ')
        if(!reason) reason = `No reason specified`

        if (message.author.id === member.user.id) return message.channel.send(`:no_entry: You cannot run this command on yourself.`)

        if (client.user.id === member.user.id) return message.channel.send(`:no_entry: You cannot run this command on the bot.`).catch(console.error);

        if(!member.bannable) return message.channel.send(`:no_entry: My role is too low to ban this user.`)

let guilds = ['659451316707524618', '719649685723414579', '673589553566842920', '772808256153190430', '674784697355862018', '673589399195222046', '718172459953815692', '670838763026645051', '673589184002523136', '742906102454288475', '673589789483728909', '686736634880065595', '722268609899921459', '739570879100616765', '741723627086676009', '742116519118372985', '753655509097381938']
let errors = [];

for (const [id, guild] of guilds){
    await member.ban({days: 7, reason: reason}).then(()=> false).catch(e=> errors.push(`Failed to ban in ${guild.name}: ${e}`));
    }

let blogEmbed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle("Ban Issued")
      .setDescription(`**User Banned:** <@${member.user.id}>`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    // Notifies the moderator that the command was executed
    let banembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle("Ban Issued")
      .setDescription(`Successfully banned <@${member.user.id}>.`)
      .addFields(
		  { name: 'Reason', value: `${reason}`, inline: true },
		  { name: 'Moderator', value: `<@${message.author.id}>`, inline: true },
	    )    
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL()) 
    client.channels.resolve('757112608280019085').send(blogEmbed)
    return message.channel.send(banembed)

    }
}
