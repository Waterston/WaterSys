const {
    Client,
    Collection
  } = require("discord.js");
  const Discord = require("discord.js");
  const db = require('quick.db')
  const fetch = require('node-superfetch')
  require('dotenv').config()
  
  const client = new Client({
    disableEveryone: true
  })
  
  client.commands = new Collection();
  client.aliases = new Collection();
  
  
  
  ["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });
  
  client.on("ready", () => {
    console.log(`${client.user.username} is now connected to servers and loaded commands.`);
    client.user.setPresence({
      status: "online",
      activity: {
        name: "!register | !help",
        type: "WATCHING"
      }
    });
    client.setInterval(async () => {
      let all = db.fetch(`vers`)
      if (!all) return
      if (all.length < 1) return
      for (let [guildId, vers] of Object.entries(all)) {
        let guild = client.guilds.resolve(guildId)
        for (let [id, data] of Object.entries(vers)) {
          let remove = []
          let add = []
          let member = guild.members.resolve(data.dsc)
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
    }, 300000)
  })

  client.on("guildMemberAdd", member =>{
    const channel = client.channels.cache.find(channel => channel.name === "public-general")
    const welcomeembed = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setTimestamp()
    .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
    .setTitle("Welcome to the State of Waterston")
    .setDescription(`Hi, ${member}. We're happy that you decided to join the State of Waterston Discord Server! While you are here, please review our Server Guidelines and Discord Terms of Serv
ice!`)
    .addField('Roblox Group', `https://www.roblox.com/groups/5231364/State-of-Waterston`)
    .addField('Punishment Database', '*Coming Soon*')
    const welcomegeneralembed = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setTimestamp()
    .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    .setTitle("Welcome to the State of Waterston")
    .setDescription(`${member} has joined the State of Waterston! Make sure to review our Server Guidelines and Discord Terms of Service!`)
    channel.send(welcomegeneralembed);
    member.send(welcomeembed).catch((error) => {
      return
    });
})

  async function getAuxillaryGroups(id) {
    let {
      body
    } = await fetch.get(`https://groups.roblox.com/v2/users/${id}/groups/roles`)
    let roles = []
    let auxGroups = body.data.filter(g => [5406536, 5406514, 5440073, 5586877, 5557949, 5440075, 5406532, 5406518].includes(g.group.id))
    let auxBinds = {
      '5406536': '709094570721280104', //fire department
      '5406514': '709093922453979188', //state patrol
      '5440073': '709094155598561362', //sherrif office
      '5586877': '709094660231921690', //corrections
      '5557949': '709094267661844540', //federal defense
      '5440075': '709094830931836928', //national guard
      '5406532': '709094923722555485', //transportation
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
  
  
  client.on("message", async message => {
    const prefix = "!";
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command)
      command.run(client, message, args);
  });
  
  client.login(process.env.TOKEN);