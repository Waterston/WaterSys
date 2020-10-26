const { stripIndents } = require('common-tags');
const Discord = require('discord.js')
const config = require("../../../config.json");

module.exports = {
    name: "forceleave",
    category: "dev",
    hidden: true,
	  description: "Forces the bot to leave the current or a specified server",
    guildOnly: false,
    ownerOnly: true,
    usage: "<id>",
    run: async (client, message, args) => {
        let guildID = args[0]
      	if (message.author.id !== config.ownerID) return console.log(`${message.author.tag} attempted to force-leave unsuccessfully.`)
        if (!guildID){ return message.reply(":warning: No guild ID specified, please supply a valid ID.").then(msg => msg.delete({timeout: 10000}))}

        const guild = bot.guilds.cache.find((g) => g.id === guildId);
        if (!guild) { return message.channel.send("The guild ID you supplied does not exist.").then(msg => msg.delete({timeout: 10000}))}

        let confirmationEmbed = new Discord.MessageEmbed()
        .setColor("#be1931")
        .setTitle("Force Leave")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({timeout: 10000}))
        .setDescription(`Are you sure you want to force leave guild ${g}? This will remove the bot from the specified guild.`)
        .setTimestamp()
        let msg = await message.channel.send(confirmationEmbed)
        await msg.react('✅')
        await msg.react('❌')

        let reaction = await msg.awaitReactions((r, u) => ['✅', '❌'].includes(r.emoji.name) && message.author.id === u.id, {
          time: 180000,
          max: 1
        })
        if (!reaction) {
          await msg.delete()
          return message.channel.send(`Command timed out.`).then(msg => msg.delete({timeout: 10000}))
        }
        let emoji = reaction.first().emoji.name
        if (emoji === '❌') {
          await msg.delete()
          return message.channel.send(`Force-leave canceled. Execute the correct guild ID with the command again.`).then(msg => msg.delete({timeout: 10000}))
        } else
        if (emoji === '✅') {
          await msg.delete()

        try {
          await guild.leave().then(guildID => console.log(`Successfully force-left the guild: ${guildID}, issued by ${message.author.tag}.`))
          return message.channel.send(`Successfully force-left the guild: ${guildID}`)
        } catch (e) {
          console.error();
          return message.channel.send("An error occurred in leaving the guild.");
        }
    }
  }
}
