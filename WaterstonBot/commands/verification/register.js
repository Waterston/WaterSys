let Discord = require('discord.js')
let db = require('quick.db')
let fetch = require('node-superfetch')

module.exports = {
  name: "register",
  category: "Roblox",
  description: "Registers your ROBLOX account",
  run: async (client, message, args) => {
    try {
      let {
        body
      } = await fetch.get(`https://verify.eryn.io/api/user/${message.author.id}`)
      let thumbnail = await getAccountThumbnail(body.robloxId)
      let confirmationEmbed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`WaterstonSystems Verification`)
        .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
        .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
        .setThumbnail(thumbnail)
        .setDescription(`Your account username is set to: **${body.robloxUsername}**. Is this correct?`)
        .setTimestamp()
      let msg = await message.channel.send({
        embed: confirmationEmbed
      })
      await msg.react('✅')
      await msg.react('❌')
      let filter = (reaction, user) => ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id
      let collector = await msg.awaitReactions(filter, {
        time: 90000,
        max: 1
      })
      msg.delete()
      let notverifiedembed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`WaterstonSystems Verification`)
        .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
        .setFooter("WaterstonSystems", client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`Please verify your Discord Account with your correct Roblox account at: https://verify.eryn.io/.`)
      if (!collector) return message.channel.send(`Verification has timed out.`)
      let emoji = collector.first().emoji.name
      if (emoji === '❌') return message.channel.send(notverifiedembed)
      if (emoji === '✅') {
        message.member.setNickname(body.robloxUsername)
        let roles = ['709052085051719720']
        let role = await getMainRoleGroup(body.robloxId)
        if (role.name) {
          role = message.guild.roles.cache.find(r => r.name.toLowerCase() === role.name.toLowerCase())
          if (role) roles.push(role)
        }
        let aux = await getAuxillaryGroups(body.robloxId)
        roles = roles.concat(aux)
        await message.member.roles.add(roles)
        let obj = {
          rbx: body.robloxId,
          dsc: message.author.id,
          rank: role,
          aux: aux
        }
        db.set(`vers.${message.guild.id}.${message.author.id}`, obj)
        let completedveri = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`WaterstonSystems Verification`)
        .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
        .setFooter("WaterstonSystems", client.user.displayAvatarURL())
        .setThumbnail(thumbnail)
        .setTimestamp()
        .setDescription(`Welcome, ${body.robloxUsername}! Successfully connected your Roblox Acccount with your Discord account.`)
        return message.channel.send(completedveri)
      }
    } catch (e) {
      if (e.body && e.body.status === "error") {
        return message.channel.send(`${e.body.error === "User not found." ? "You do not have a RoVerify linked account. Please go to https://verify.eryn.io/, verify, and try again." : e.body.error}`)
      } else {
        console.log(e)
      }
    }
  }
}

async function getAuxillaryGroups(id) {
  let {
    body
  } = await fetch.get(`https://groups.roblox.com/v2/users/${id}/groups/roles`)
  let roles = []
  let auxGroups = body.data.filter(g => [5406536, 5406514, 5440073, 5586877, 5557949, 5440075, 5406532, 5406518].includes(g.group.id))
  let auxBinds = {
    '5406536': '709094570721280104', //firedept
    '5406514': '709093922453979188', //state
    '5440073': '709094155598561362', //sherrif
    '5586877': '709059612430565408', //corrections
    '5557949': '709094267661844540', //fed
    '5440075': '709094830931836928', //national
    '5406532': '709094923722555485', //transp
    '5406518': '709095030958063616' //public
  }
  for (let group of auxGroups) {
    roles.push(auxBinds[`${group.group.id}`])
  }
  return roles
}

async function getMainRoleGroup(id) {
  let {
    body
  } = await fetch.get(`https://groups.roblox.com/v2/users/${id}/groups/roles`)
  let group = body.data.find(g => g.group.id === 5231364)
  if (!group) return {
    name: false,
    id: 0
  }
  return {
    name: group.role.name,
    id: group.role.id
  }
}

async function getAccountThumbnail(id) {
  let {
    body
  } = await fetch.get(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${id}&size=352x352&format=Png&isCircular=false`)
  return body.data[0].imageUrl
}