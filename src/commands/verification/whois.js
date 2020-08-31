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
        let StatusBio = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}/status`).then(res => res.json())
        let JoinDate = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}`).then(res => res.json())

        //Create Sending Embed Completion
        const whoembed = new Discord.MessageEmbed()
        .setTitle(`Roblox Username: ${body.robloxUsername}`)
        .setDescription(`**Status:**\n${StatusBio.status}\n\n**Creation Date:**\n${JoinDate.created}`)
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())

        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(whoembed)
    }
}





