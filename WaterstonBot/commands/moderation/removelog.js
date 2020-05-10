let Discord = require('discord.js')
let db = require('quick.db')


module.exports = {
  name: "removelog",
  category: "Moderation",
  description: "Removes a moderation log from a user",
  run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
    if (!args[0]) return message.channel.send(`⚠️ Please mention an ID`).then(r => r.delete({
      timeout: 10000
    }))
    let id = args[0]
    let logs = db.fetch(`logs.${message.guild.id}`)
    let action = logs.find(r => r.id === id)
    if (!action) return message.channel.send(`⚠️ Please mention a valid ID`).then(r => r.delete({
      timeout: 10000
    }))
    let desc = `Is this the log you want to revoke?\n`
    Object.entries(action).map(r => desc += `\n**${r[0]}:** ${r[0].endsWith('er') ? `<@${r[1]}>` : r[0].endsWith('ed') ? `<@${r[1]}>` : r[1]}`)
    let confirmationEmbed = new Discord.MessageEmbed()
      .setColor('ORANGE')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({
        timeout: 10000
      }))
      .setDescription(desc)
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
      return message.channel.send(`Prompt timed out`).then(r => r.delete({
        timeout: 10000
      }))
    }
    let emoji = reaction.first().emoji.name
    if (emoji === '❌') {
      await msg.delete()
      return message.channel.send(`Please re-execute the command with the right ID`).then(r => r.delete({
        timeout: 10000
      }))
    } else
    if (emoji === '✅') {
      await msg.delete()
      logs = logs.filter(r => r.id !== id)
      db.set(`logs.${message.guild.id}`, logs)
      let logEmbed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({
          timeout: 10000
        }))
        .setTitle(`Log Revoked`)
        .setDescription(`**Type:** ${action.id.startsWith('w') ? 'Warn' : 'Kick'}\n**Revoker:** <@${message.author.id}>\n**Revoked From:** <@${action[`${action.id.startsWith('w') ? 'warn' : 'kick'}er`]}>\n\n**Log ${action.id}:**\n\n${Object.entries(action).map(r => `**${r[0]}:** ${r[0].endsWith('er') ? `<@${r[1]}>` : r[0].endsWith('ed') ? `<@${r[1]}>` : r[1]}`).join('\n')}`)
        .setTimestamp()
      client.channels.resolve('709074878912790529').send(logEmbed)
      return message.channel.send(`Successfully revoked a log with id ${id}`)
    }
  }
}
