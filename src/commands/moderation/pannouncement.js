const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "pannouncement",
    category: "public",
    description: "Announces something in announcement channels",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
        let rMember = args[0]       
        const channel = message.guild.channels.cache.find(channel => channel.name === "public-announcements")
        
        if (!channel)
            return channel.send("Channel not found. Please contact a Founder to fix this.");
            
            const annembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
            .setTitle("Announcement Submitted")
            .setDescription(`${message.member}, sucessfully sent your announcement to the directed channel!`)


            const sannembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setFooter(`WaterstonSystems | Message sent by ${message.member}`, client.user.displayAvatarURL()) 
            .setTitle(rMember)
            .setDescription(`${args.slice(1).join(" ")}`)


            message.channel.send(annembed)
            channel.send(sannembed)
    }
}
