const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "subscribe business",
    category: "public",
    description: "public",
    run: async (client, message, args) => {
        let role = message.guild.roles.cache.find(r => r.name === "Department Hiring");

        let embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTitle(`Subscribed Department Hiring`)
        .setDescription(`Sucessfully added you to Department Hiring.`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL()) 

        message.author.roles.remove(role.id).catch(console.error).then(() => {
            message.channel.send(embed)
        })
  }
}; 
