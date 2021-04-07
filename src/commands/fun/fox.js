const Discord = require('discord.js');

const fetch = require('node-fetch')

module.exports = {
    name: "fox",
    category: "fun",
    description: "Get a random picture of a fox.",
    run: async (client, message, args) => {
        const body = await fetch('https://randomfox.ca/floof/').then(res => res.json())
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setImage(body.image)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}