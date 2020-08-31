const Discord = require('discord.js');

const fetch = require('node-fetch')

module.exports = {
    name: "whois",
    aliases: ['roblox', 'info'],
    category: "Roblox",
    description: "stalk ppl",
    run: async (client, message, args) => {

        //Get Response of Body
        const body = await fetch(`https://verify.eryn.io/api/user/${message.author.id}`).then(res => res.json())
        const StatusBio = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}/status`).then(res => res.json())
        const JoinDate = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}`).then(res => res.json())

        //Create Sending Embed Completion
        const whoembed = new Discord.MessageEmbed()
        .setTitle(`Roblox Username: ${body.robloxUsername}`)
        .setDescription(`**Status:**\n${StatusBio}\n\n**Creation Date:**\n${JoinDate}`)
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())

        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(whoembed)
    }
}





