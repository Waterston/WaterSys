const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "unsubscribe development",
    category: "public",
    description: "public",
    run: async (client, message, args) => {
        let subscriberole = message.guild.roles.cache.find(r => r.name === "Development Subscriber");

        let embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Un-Subscribed Development`)
        .setDescription(`Sucessfully removed you from Development Feed.`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

        message.author.roles.remove(subscriberole.id).catch(console.error).then(() => {
            message.channel.send(embed)
        })
  }
}; 
