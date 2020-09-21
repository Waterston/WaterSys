const Discord = require('discord.js');

module.exports = {
    name: "uptime",
    category: "public",
    description: "Shows the bot uptime",
    cooldown: 5,
    usage: "<mention, id>",
    cooldown: 5,
    run: async (client, message, args) => {
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds `
        }
        
        
        const uptimeembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTimestamp()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL()) 
        .setTitle(`${client.user.username} Uptime`)
        .setDescription(`${duration(client.uptime)}`)
        message.channel.send(uptimeembed)
    
    }
}
