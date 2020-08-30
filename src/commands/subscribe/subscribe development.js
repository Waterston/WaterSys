const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "subscribe development",
    category: "public",
    description: "public",
    run: async (client, message, args) => {
        let subscriberole = message.guild.roles.cache.find(r => r.name === "Development Subscriber");

        let embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Subscribed Development`)
        .setDescription(`Sucessfully added you to Development Feed.`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

        message.author.roles.add(subscriberole.id).catch(console.error).then(() => {
            message.channel.send(embed)
        })
  }
}; 
