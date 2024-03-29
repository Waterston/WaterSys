const {
  Client,
  Collection
} = require("discord.js");
const Discord = require("discord.js");
//const db = require('quick.db')
//const fetch = require('node-superfetch')
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,}, (err) => {
      if (err) return console.error(err);
      console.log('Connected to MongoDB.');
});

const client = new Client({
  disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();
//client.cooldowns = new Collection();
const config = require("./config.json");


["command"].forEach(handler => {
  require(`./src/handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(`${client.user.username} is now connected to ${client.guilds.cache.size} server(s) with commands loaded.`);
  client.user.setPresence({
    status: "online",
    activity: {
      name: "!help | watersys.pearo.icu",
      type: "WATCHING"
    }
  });
  /* client.setInterval(async () => {
    let all = db.fetch(`vers`)
    if (!all) return
    if (all.length < 1) return
    for (let [guildId, vers] of Object.entries(all)) {
      let guild = client.guilds.resolve(guildId)
      for (let [id, data] of Object.entries(vers)) {
        let remove = []
        let add = []
        let member = guild.members.resolve(data.dsc).catch(console.error);
        if (!member) {
          db.delete(`vers.${guildId}.{data.dsc}`)
          continue;
        }
        
        let aux = await getAuxillaryGroups(data.rbx)
        let main = await getMainRoleGroup(data.rbx)
        if (data.rank.id !== main.id) {
          if (main.name) {
            add.push(guild.roles.cache.find(r => r.name.toLowerCase() === main.name.toLowerCase()))
            remove.push(guild.roles.cache.find(r => r.name.toLowerCase() === data.rank.name.toLowerCase()))
            data.rank = main
          } else {
            let oldRole = guild.roles.cache.find(r => r.name.toLowerCase() === data.rank.name.toLowerCase())
            remove.push(oldRole)
            data.rank = main
          }
        }
        if (JSON.stringify(aux) !== JSON.stringify(data.aux)) {
          remove = remove.concat(data.aux)
          add = add.concat(aux)
          data.aux = aux
        }
        await member.roles.remove(remove)
        await member.roles.add(add)
        db.set(`vers.${guildId}.${data.dsc}`, data)
      }
    }
  }, 300000) */
})

/* client.on("guildMemberAdd", member =>{
  const channel = client.channels.cache.find(channel => channel.name === "public-lounge")
  const welcomeembed = new Discord.MessageEmbed()
  .setColor("#d37842")
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .setAuthor(client.user.username, client.user.displayAvatarURL())
  .setTitle(`Welcome to the ${message.guild.name}`)
  .setDescription(`Hi, ${member}. We're happy that you decided to join ${message.guild.name}! While you are here, please review our Server Guidelines!`)
  .addField('Roblox Group', `https://www.roblox.com/groups/9180170`)

  const welcomegeneralembed = new Discord.MessageEmbed()
  .setColor("#d37842")
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .setTitle(`Welcome to ${message.guild.name}`)
  .setDescription(`${member} has joined the ${message.guild.name}! Make sure to review our Server Guidelines!`)

  message.channel.send(welcomegeneralembed);
  member.send(welcomeembed).catch((error) => {
    return
  });
}) */

client.on("messageDelete", async message =>{
  if(message.author.bot) return
   const mDelete = new Discord.MessageEmbed()
  .setColor("#d37842")
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL()) 
  .setAuthor(client.user.username, client.user.displayAvatarURL())
  .setTitle("Message Deleted")
  .addField("Message Content: ", message.content)
  .addField("Author: ", message.author.tag)
  .addField("Occurance: ", message.channel)
   
   const logchannel = client.channels.cache.find(channel => channel.name === "message-logs")
   if (!logchannel) return;
   logchannel.send(mDelete);

})

/* async function getAuxillaryGroups(id) {
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
  let group = body.data.find(g => g.group.id === 9180170)
  if (!group) return {
    name: false,
    id: 0
  }
  return {
    name: group.role.name,
    id: group.role.id
  }
} */


client.on("message", async message => {
  //This is simply a list of blacklisted words that the bot should look for. This is not intended to offend anyone looking through this code.
  let blacklisted = ['sped', 'nigga', 'nigger', 'niga', 'fhag', 'faggot', 'fag', 'smd', 'retard', 'boob', 'anal', 'vagina', 'pussy', 'dick', 'penis', 'porn', 'sperm', 'diok', 'yhole', 'whore', 'slut', 'clit', 'spastic', 'spaz', 'coochie', 'dike'];
  let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
    }
             if (foundInText && !message.member.roles.cache.some(role =>['800033395710099476', '800033394725093406'].includes(role.id))) { //ID in order: Community Manager, Administrator
                  message.delete();
                  message.channel.send(`${message.author}, do not send blacklisted text. Attempting to bypass this will result in moderation actions.`).then(r => r.delete({timeout: 10000}))
              }
  
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(config.prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command)
    command.run(client, message, args);
});

client.login(process.env.TOKEN);
