const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: "math",
    aliases: ['calculate', 'calc'],
    category: "public",
    description: "Calculates the given equation",
    usage: "<equation>",
    run: async (client, message, args) => {
    try {
        if (!args[0]) return message.send(':warning: No equation was specified.')
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Solution`)
        .setDescription(`${math.evaluate(args.join(' '))}`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    } catch (err) {
        message.channel.send(':warning: An invalid equation or unsupported operation was entered. Please modify and try again.').catch();
    }
    }
}