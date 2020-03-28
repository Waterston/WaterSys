const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "appeal",
    category: "moderation",
    description: "Appeal a moderation log",
    usage: "<mention, id>",
    run: async (client, message, args) => {
         let rMember = args[0]       
        const channel = message.guild.channels.find(c => c.name === "appeal-request")
        
        if (!channel)
            return;

            const embed = new RichEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setFooter("Waterston Systems", message.guild.iconURL)
            .setTitle("Appeal Request")
            .addField('Submitted by:', `${message.member}`)
            .addField('Appeal Type:', rMember)
            .addField('Reason:', `${args.slice(1).join(" ")}`)
            return channel.send(embed);
            

    }
}