const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "requestban",
    category: "public",
    description: "Request a game ban",
    usage: "<mention, id>",
    run: async (client, message, args) => {
         let rMember = args[0]       
         const channel = message.guild.channels.cache.find(channel => channel.name === "ban-request")
        if (!channel)
            return;

            const embed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setTitle("WaterstonSystems Ban Request")
            .addField('Reported by:', `${message.member}`)
            .addField('User Reported:', rMember)
            .addField('Information:', `${args.slice(1).join(" ")}`)
            return channel.send(embed);
            

    }
}