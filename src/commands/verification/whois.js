let Discord = require('discord.js')
let fetch = require('node-superfetch')

module.exports = {
    name: "whois",
    category: "info",
    description: "Returns command list",
    run: async (client, message, args) => {
        let response = fetch.get(`https://groups.roblox.com/v1/groups/5231364`).catch(e))
        const whoisembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTimestamp()
        .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
        .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
        .setTitle("Roblox Information")
        .setDescription(`${response.data.name}`)
        message.channel.send(whoisembed)
      }
    }


