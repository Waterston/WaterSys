const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes a user",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(`⚠️ No user specified, please mention the user.`)
        
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        let muterole = message.guild.roles.cache.find(r => r.name === "Muted");

        let mutedembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Mute Issued`)
        .setDescription(`**User Muted:** <@${mutee.user.id}>\n**Content Moderator:** <@${message.author.id}>\n**Reason:** ${reason}`)
        .setTimestamp()
        .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
        
        let mutedlogembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Mute Issued`)
        .setDescription(`Sucessfully issued a mute to <@${mutee.user.id}> by <@${message.author.id}> for **${reason}.**`)
        .setTimestamp()
        .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 

        mutee.roles.add(muterole.id).catch(console.error).then(() => {
            message.channel.send(mutedlogembed)
            return client.channels.resolve('709074878912790529').send(mutedembed)
        })
  }
}; 