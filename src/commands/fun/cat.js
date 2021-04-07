const Discord = require('discord.js');

const fetch = require('node-fetch')

module.exports = {
    name: "cat",
    aliases: ['cat', 'kitty'],
    category: "fun",
    description: "Get a random picture of a cat.",
    run: async (client, message, args) => {
        const body = await fetch('https://shibe.online/api/cats').then(res => res.json())
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setImage(body[0])
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}