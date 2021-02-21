const Discord = require('discord.js');

module.exports = {
    name: "help",
    aliases: ['cmds', 'commands'],
    category: "info",
    description: "Returns command list",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setTitle(`${client.user.username} Help`)
            .setColor("#0084ff")
            .setDescription(`Check your direct messages! You have been sent a list of publicly accessible commands.`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL) 
            
        const dmembed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setColor("#0084ff")
            .setTitle(`${client.user.username} Help`)
            .setTimestamp()
            .setDescription(`Our list of commands can be found online at https://watersys.pearo.icu/commands.html for your convenience.`)
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
        message.author.send(dmembed).catch((error) => {
            return message.channel.send(`:no_entry_sign: Your direct messages are locked. Check your account privacy settings and try again.`);
          });   
        message.channel.send(embed)   
    }}
