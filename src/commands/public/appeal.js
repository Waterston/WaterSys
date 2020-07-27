const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "appeal",
    category: "public",
    description: "Appeal a moderation log",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let rMember = args[0]       
        const channel = message.guild.channels.cache.find(channel => channel.name === "history-appeal-logs")
        
        if (!channel)
            return channel.send("Channel not found. Please contact a Founder to fix this.");
            const appealchannelembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
            .setTitle("Appeal Request")
            .setDescription(`${message.member}, sucessfully sent your appeal to our Discord Moderation team for further review.`)


            const embed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
            .setTitle("Appeal Request")
            .addField('Submitted by:', `${message.member}`)
            .addField('Appeal Type:', rMember)
            .addField('Reason:', `${args.slice(1).join(" ")}`)
            message.channel.send(appealchannelembed)
            let msg = await channel.send({
                embed: embed
              })
              await msg.react('✅')
              await msg.react('❌')
            return
    }
}
