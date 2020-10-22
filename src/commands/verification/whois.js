const Discord = require('discord.js');

const fetch = require('node-fetch')

module.exports = {
    name: "whois",
    aliases: ['roblox', 'info'],
    category: "info",
    description: "Identify and retrive the specified user's information",
    guildOnly: true,
    run: async (client, message, args) => {

        //let member = message.mentions.members.first() || message.member
        // Sets the variables to the API links.
        let body = await fetch(`https://verify.eryn.io/api/user/${message.author.id}`).then(res => res.json())
        let StatusBio = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}/status`).then(res => res.json())
        let JoinDate = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}`).then(res => res.json())
        //let RobloxAvatar = await getAccountThumbnail(body.robloxId)

        // Define the first embed, which will contain Roblox info.
        let whoembed = new Discord.MessageEmbed()
        .setTitle(`${body.robloxUsername}`)
        .setURL(`https://roblox.com/users/${body.robloxId}/profile`)
        .addField("Roblox ID", `${body.robloxId}`, false)
        .addField("Status", `${StatusBio.status}`, false)
        .addField("Join Date", `${JoinDate.created}`, true)
        //.setDescription(`**Status:**\n${StatusBio.status}\n\n**Creation Date:**\n${JoinDate.created}`)
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(RobloxAvatar)
        .setTimestamp()

        message.channel.send(whoembed)
    }
}

/*async function getAccountThumbnail(id) {
    let {
      body
    } = await fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${id}&size=352x352&format=Png&isCircular=false`)
    return body.data[0].imageUrl
  }*/