const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const config = require("../../../config.json");

module.exports = {
    name: "suggest",
    category: "public",
    description: "Suggest new thing to add for Waterston",
    guildOnly: true,
    usage: "<type> <suggestion>",
    run: async (client, message, args) => {
      if (message.guild.id !== config.featuredguildID) return;
      let rMember = args[0]       
      const channel = message.guild.channels.cache.find(channel => channel.name === "suggestions")
      if (!channel)
            return channel.send("Channel not found. Please contact a Founder to fix this.");
            
            const appealchannelembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
            .setTitle("Suggestion Submitted")
            .setDescription(`${message.member}, sucessfully sent your suggestion to the development team for further review!`)

            const suggestionembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
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
