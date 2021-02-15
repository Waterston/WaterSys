const Discord = require('discord.js');

module.exports = {
    name: "joebiden",
    aliases: ['joe', 'jb'],
    category: "fun",
    description: "For when you need to Joe Biden.",
    run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send("https://cdn.discordapp.com/attachments/746430272224100522/760874849601716240/image0.png").then(r => r.delete({timeout: 10000}))
        message.channel.send("Will you shut up, man?")
        message.channel.send("https://cdn.discordapp.com/attachments/739148349722198016/760874426492518400/unknown.png")
    }
}
