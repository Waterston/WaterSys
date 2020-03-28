const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "viewroles",
    category: "info",
    description: "View custom, role reactions",
    run: async (client, message, args) => {
        if(message.author.bot)
        {
            if(message.embeds)
            {
                const embedMsg = message.embeds.find(msg => msg.title === 'Reaction Roles')
                if(embedMsg)
                {
                    await embedMsg.react('692909429045329941')
                    await embedMsg.react('692909506962915419')
                    .catch(err => console.error)

                }
            }
            return;
        }
        const embed = new RichEmbed()
        embed.setColor("#0084ff")
        embed.setTitle("Reaction Roles")
        embed.setDescription("*This message will be deleted in 200 seconds.* ")
        embed.addField(':game_die: Game Night Subscriber :game_die:', `Join in on the fun that the community host game nights!`)
        embed.addField(':tools: Development Subscriber :tools:', `Get the latest updates on what were making!`)
        embed.setTimestamp()
        embed.setFooter("Waterston Systems", message.guild.iconURL)
        message.channel.send(embed);
    }
}