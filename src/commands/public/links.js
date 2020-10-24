const Discord = require('discord.js');

module.exports = {
    name: "links",
    aliases: ['link', 'invite', 'roblox'],
    category: "public",
    description: "Posts the most updated links for Waterston content",
    usage: "<mention, id>",
    run: async (client, message, args) => {
       //if ( message.guild.id === '659451316707524618') { // Makes this command only work for the main server
       if (!message.guild.members.cache.find(m => m.id === "137663615657312256")) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor("#0084ff")
        .setTitle("Links")
        .addField("Server", "https://discord.io/waterston", false)
        .addField("Roblox Group", "https://www.roblox.com/groups/5231364", false)
        .addField("Website", "Coming soon", false)
        .addField("Bot Invite", "Coming soon", false)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
        //}
    }
}
