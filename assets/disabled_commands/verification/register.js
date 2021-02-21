let Discord = require('discord.js')
let db = require('quick.db')
let fetch = require('node-superfetch')

module.exports = {
  name: "register",
  aliases: ['verify', 'reverify', 'getroles', 'update', 'updateroles'],
  category: "Roblox",
  description: "Registers your Roblox account and links it to your Discord account",
  guildOnly: true,
  run: async (client, message, args) => {
    try {
      let {
        body
      } = await fetch.get(`https://verify.eryn.io/api/user/${message.author.id}`)
      //    } catch (e) {
      //if (e.body && e.body.status === "504") {
      //  return message.channel.send(`${e.body.error === "Gateway Time-out." ? "There was an issue in retrieving user data. Please try again later. If this issue still continues, contact a server staff." : e.body.error}`)
      //} else {
      //  console.log(e)
      //  }
      //}
      let thumbnail = await getAccountThumbnail(body.robloxId)
      let confirmationEmbed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setTitle(`Verification`)
        .setAuthor(message.author.tag, client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL()) 
        .setThumbnail(thumbnail)
        .setDescription(`Your Roblox username is: **${body.robloxUsername}**. Is this correct?`)
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
        .setTitle(`Verification Setup`)
        .setAuthor(message.author.tag, client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`Please verify your Discord account with your correct Roblox account at: https://verify.eryn.io/. After you have verified, re-register again.`)
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
        .setTitle(`Verification Completed`)
        .setAuthor(message.author.tag, client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(thumbnail)
        .setTimestamp()
        .setDescription(`Welcome, **${body.robloxUsername}**! Successfully connected your Roblox acccount with your Discord account.`)
        return message.channel.send(completedveri)
      }
    } catch (e) {
      if (e.body && e.body.status === "error") {
        return message.channel.send(`${e.body.error === "User not found." ? "It appears that you don't have a linked Roblox account. Please go to https://verify.eryn.io/ and follow instructions. Then, type `!register` again." : e.body.error}`)
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
    let auxGroups = body.data.filter(g => [5406536, 5406514, 5440073, 5586877, 5557949, 5440075, 5406532, 5406518, 7933212, 5586869, 5406518, 6690972, 7388100, 7324296, 6744492, 7456091].includes(g.group.id))
    let auxBinds = {
        '5406536': '709094570721280104', //fire department
        '5406514': '709093922453979188', //state patrol
        '5440073': '709094155598561362', //sherrif office
        '5586877': '709094660231921690', //corrections
        '5557949': '709094267661844540', //federal defense
        '5440075': '709094830931836928', //national guard
        '5406532': '709094923722555485', //transportation
        '5406518': '709095030958063616', //public recreations
        '7933212': '712170487098376272', //public safety
        '5586869': '712170799632744552', //commerce
        '5406518': '709095030958063616', //public rec
        '6690972': '722510382853390386', //department of state
        '7388100': '742546484716765265', //bcso swat
        '7324296': '740676471236067479', //wps
        '6744492': '724041965800521848', //department of justice
        '7456091': '735589774248902716' //courts
  
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
