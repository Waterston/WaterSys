const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "requestban",
    category: "public",
    description: "Request a game ban",
    usage: "<mention, id>",
    run: async (client, message, args) => {
         let rMember = args[0]       
         const channel = message.guild.channels.cache.find(channel => channel.name === "game-ban-request")
        if (!channel)
            return message.channel.send("Channel not found. Please contact a Founder to fix this.");
  
            const requestbanchannelembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
            .setTitle("Ban Request")
            .setDescription(`${message.member}, sucessfully sent your ban request to our Game Moderation team for further review.`)

            const embed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setTitle("Ban Request")
            .addField('Reported by:', `${message.member}`)
            .addField('User Reported:', rMember)
            .addField('Information:', `${args.slice(1).join(" ")}`)
            message.channel.send(requestbanchannelembed);
            let msg = await channel.send({
                embed: embed
              })
              await msg.react('✅')
              await msg.react('❌')
            return
    }
}