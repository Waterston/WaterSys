const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const config = require("../../../config.json");

module.exports = {
    name: "appeal",
    category: "public",
    description: "Appeal a moderation log",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (!config.featuredguildID.includes(message.guild.id)) return;
        let type = ['kick', 'warn']
        if(!type.includes(args[0])) return message.channel.send(`Please input an appeal from the following options:\n\`${type.join(", ")}\``)  
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send("Please input a minimum of 3 sentences as to why the Moderation team should accept your appeal.")
        if(reason.length <= 100) return message.channel.send("Please input more than `100` characters.")
        const channel = message.guild.channels.cache.find(channel => channel.id === '757112608280019085')
        if (!channel)
            return message.channel.send("Channel not found. Please contact a server administrator to fix this.");
            const appealchannelembed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(message.author.tag, client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
            .setTitle("Appeal Request")
            .setDescription(`${message.member}, sucessfully sent your appeal to our Discord Moderation team for further review.`)

            const embed = new Discord.MessageEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setAuthor(message.author.tag, client.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
            .setTitle("Appeal Request")
            .addField('Submitted by:', `${message.member}`)
            .addField('Appeal Type:', args[0])
            .addField('Reason:', `${args.slice(1).join(" ")}`)
            message.channel.send(appealchannelembed)
            let msg = await channel.send({
                content: "<@&709047575180869663>",
                embed: embed
              })
              await msg.react('✅')
              await msg.react('❌')
            return
    }
}
