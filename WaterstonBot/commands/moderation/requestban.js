const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "requestban",
    category: "moderation",
    description: "Request a game ban",
    usage: "<mention, id>",
    run: async (client, message, args) => {
         let rMember = args[0]       
        const channel = message.guild.channels.find(c => c.name === "ban-request")
        
        if (!channel)
            return;

            const embed = new RichEmbed()
            .setColor("#0084ff")
            .setTimestamp()
            .setFooter("Waterston Systems", message.guild.iconURL)
            .setTitle("Ban Request")
            .addField('Reported by:', `${message.member}`)
            .addField('User Reported:', rMember)
            .addField('Information:', `${args.slice(1).join(" ")}`)
            return channel.send(embed);
            

    }
}