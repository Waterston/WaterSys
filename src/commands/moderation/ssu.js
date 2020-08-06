const Discord = require('discord.js');

module.exports = {
    name: "serverstartup",
    aliases: ['ssu', 'start'],
    category: "game",
    description: "ssu",
    usage: "<mention, id>",
    run: async (client, message, args) => {
      if (!message.member.roles.cache.get('709047598069317733')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))

      let ssuembed = new Discord.MessageEmbed()
      .setColor("#0084ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTitle(`Server Start Up`)
      .setDescription(`A Server Start Up is happening now! Make sure to join if you can!\n\n**Game Link: **https://www.roblox.com/games/4592196331`)
      .setTimestamp()
      .setFooter(`Hosted by: <@${message.author.id}>`, client.user.displayAvatarURL()) 

      message.channel.send(ssuembed)
      message.channel.send("@here")
      
    }
}
