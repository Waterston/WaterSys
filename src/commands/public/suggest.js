const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "suggest",
    category: "public",
    description: "Suggest a V1 command",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        let rMember = args[0]       
        const channel = message.guild.channels.cache.find(channel => channel.name === "suggestions")
        
        if (!channel)
            return channel.send("Channel not found. Please contact a Founder to fix this.");
            
            const appealchannelembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
            .setTitle("Suggestion Submitted")
            .setDescription(`${message.member}, sucessfully sent your suggestion to the development team for further review!`)


            const suggestionembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
            .setTitle("New Suggestion")
            .addField('Submitted by:', `${message.member}`)
            .addField('Suggestion Type:', rMember)
            .addField('Suggestion:', `${args.slice(1).join(" ")}`)
            message.channel.send(appealchannelembed)
            let msg = await channel.send(suggestionembed)
              await msg.react('✅')
              await msg.react('❌')
            return
    }
}
