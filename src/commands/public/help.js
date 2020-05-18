const Discord = require('discord.js');

module.exports = {
    name: "help",
    aliases: ['cmds', 'commands'],
    category: "info",
    description: "Returns command list",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setTitle(`WaterstonSystems Help`)
            .setColor("#0084ff")
            .setDescription(`Check your direct messages! You have been sent a list of publicly accessible commands.`)
            .setTimestamp()
            .setFooter("WaterstonSystems", client.user.displayAvatarURL) 
            
            
        const dmembed = new Discord.MessageEmbed()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setColor("#0084ff")
            .setTitle(`WaterstonSystems Help`)
            .setTimestamp()
            .setDescription('**Bot Username: ** `WaterstonSystems`\n**Bot Libraries: ** `Node, Discord.js`\n**Bot Prefix: `!`**\n\n**Public Commands**\n`!help` ➜ Displays bot information and commands.\n`!register` ➜ Registers your Roblox account to Discord.\n`!ping` ➜ Displays bot ping latency.\n`!uptime` ➜ Displays how long the bot has been online.\n`!appeal <warning/kick> <reason>` ➜ Appeal a Discord moderation punishment.\n`!requestban <username/id> <reason>` ➜ Request an in-game ban.\n\n**Discord Moderation Commands**\n`!warn <mention> <reason>` ➜ Adds a warning to their user history.\n`!viewwarns <mention>` ➜ View a users warning history.\n`!kick <mention> <reason>` ➜ Kicks a user from the server.\n`!viewkicks <mention>` ➜ View a users kick history.\n`!removelog <mention> <warning/kick_id>` ➜ Removes a warning/kick from a users history.\n\n**Game Moderation Commands**\n*Coming Soon*')
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
        message.author.send(dmembed).catch((error) => {
            return message.channel.send(`⚠️ [ERROR] Your Direct Message are locked.`);
          });   
        message.channel.send(embed)   
    }}
