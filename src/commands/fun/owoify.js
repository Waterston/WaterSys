const Discord = require('discord.js');

const faces = ['(・`ω´・)', ';;w;;', 'OwO', 'owo', 'UwU', 'uwu', '>w<', '^w^']

function Owoify (str) {
  str = str.replace(/(?:r|l)/g, 'w')
  str = str.replace(/(?:R|L)/g, 'W')
  str = str.replace(/n([aeiou])/g, 'ny$1')
  str = str.replace(/N([aeiou])/g, 'Ny$1')
  str = str.replace(/N([AEIOU])/g, 'Ny$1')
  str = str.replace(/ove/g, 'uv')
  str = str.replace(/!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ')

  return str
};

module.exports = {
    name: "owoify",
    aliases: ['owo', 'uwu', 'furryspeak', 'whatsthis'],
    category: "fun",
    description: "Run messages through the Owoify filter.",
    usage: "<message>",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        channel.startTyping()
        .setColor("#0084ff")
        .setDescription(Owoify(text))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed).then(() => channel.stopTyping()
    }
}
