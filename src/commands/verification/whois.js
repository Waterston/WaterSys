const Discord = require('discord.js');

const fetch = require('node-fetch')

module.exports = {
    name: "whois",
    aliases: ['roblox', 'info'],
    category: "info",
    description: "Identify and retrieve the specified user's information",
    guildOnly: true,
    run: async (client, message, args) => {

        let member = message.mentions.members.first() || message.member
        // Sets the variables to the API links.
        let body = await fetch(`https://verify.eryn.io/api/user/${message.member.id}`).then(res => res.json())
        let Status = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}/status`).then(res => res.json())
        let UserInfo = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}`).then(res => res.json())
        let friends = await fetch(`https://friends.roblox.com/v1/users/${body.robloxId}/friends/count`).then(res => res.json())
        //let RobloxAvatar = await getAccountThumbnail(body.robloxId)

        // Define the first embed, which will contain Roblox info.
        let whoembed = new Discord.MessageEmbed()
        .setTitle(`${body.robloxUsername}`)
        .setURL(`https://roblox.com/users/${body.robloxId}/profile`)
        .addField("Status", `${Status.status}`, false)
        .addField("Bio", `${UserInfo.description}`, false)
        .addField("Roblox ID", `${body.robloxId}`, true)
        .addField("Join Date", `${UserInfo.created}`, true)
        .addField("Friends", `${friends.count}`, true)
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        //.setThumbnail(RobloxAvatar)
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