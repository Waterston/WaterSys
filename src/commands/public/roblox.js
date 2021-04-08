const Discord = require('discord.js');

const fetch = require('node-fetch')

module.exports = {
    name: "roblox",
    aliases: ['rwhois', 'rinfo'],
    category: "public",
    description: "Identify and retrieve the specified user's Roblox information",
    guildOnly: true,
    run: async (client, message, args) => {

        let member = message.mentions.members.first() || message.member  || await message.guild.members.fetch(args[0]);
        // Sets the variables to the API links.
        let body = await fetch(`https://verify.eryn.io/api/user/${message.member.id}`).then(res => res.json())
        let Status = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}/status`).then(res => res.json())
        let UserInfo = await fetch(`https://users.roblox.com/v1/users/${body.robloxId}`).then(res => res.json())
        let friends = await fetch(`https://friends.roblox.com/v1/users/${body.robloxId}/friends/count`).then(res => res.json())
        let followers = await fetch(`https://friends.roblox.com/v1/users/${body.robloxId}/followers/count`).then(res => res.json())
        let following = await fetch(`https://friends.roblox.com/v1/users/${body.robloxId}/followings/count`).then(res => res.json())
        let thumbnail = await fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${body.robloxId}&size=352x352&format=Png&isCircular=false`).then(res => res.json())

        // Define the first embed, which will contain Roblox info.
        let whoembed = new Discord.MessageEmbed()
        .setTitle(`${body.robloxUsername}`)
        .setURL(`https://roblox.com/users/${body.robloxId}/profile`)
        .addField("Status", `${Status.status}`, false)
        .addField("Bio", `${UserInfo.description}`, false)
        .addField("Roblox ID", `${body.robloxId}`, true)
        .addField("Join Date", `${UserInfo.created}`, true)
        .addField("Friends", `${friends.count}`, true)
        .addField("Followers | Following", `${followers.count} | ${following.count}`, true)
        .setColor("#e51f12")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(thumbnail.imageUrl)
        .setTimestamp()

        message.channel.send(whoembed)
    }
}