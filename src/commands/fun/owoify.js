const Discord = require('discord.js');

const faces = ['(・`ω´・)', ';;w;;', 'OwO', 'owo', 'UwU', 'uwu', '>w<', '^w^']

function Owoify (str) {
  str = String(str).replace(/(?:r|l)/g, 'w')
  str = String(str).replace(/(?:R|L)/g, 'W')
  str = String(str).replace(/n([aeiou])/g, 'ny$1')
  str = String(str).replace(/N([aeiou])/g, 'Ny$1')
  str = String(str).replace(/N([AEIOU])/g, 'Ny$1')
  str = String(str).replace(/ove/g, 'uv')
  str = String(str).replace(/!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ')

  return str
};

module.exports = {
    name: "owoify",
    aliases: ['owo', 'uwu', 'furryspeak', 'whatsthis'],
    category: "fun",
    description: "Run messages through the owoify filter.",
    usage: "<message>",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(Owoify(message))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
