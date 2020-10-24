const Discord = require('discord.js');

module.exports = {
    name: "help",
    aliases: ['cmds', 'commands'],
    category: "info",
    description: "Returns command list",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setTitle(`${client.user.username} Help`)
            .setColor("#0084ff")
            .setDescription(`Check your direct messages! You have been sent a list of publicly accessible commands.`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL) 
            
        const dmembed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setColor("#0084ff")
            .setTitle(`${client.user.username} Help`)
            .setTimestamp()
            .setDescription('**Bot Username: ** `WaterstonSystems`\n**Bot Libraries: ** `Node, Discord.js`\n**Bot Prefix: `!`**\n\n**Public Commands**\n`!help` ➜ Displays bot information and commands.\n`!register` ➜ Registers your Roblox account to Discord.\n `!avatar <mention>` ➜ Returns the specified user\'s profile picture.\n`!ping` ➜ Displays bot ping latency.\n`!uptime` ➜ Displays how long the bot has been online.\n`!suggest <type> <description>` ➜ Suggest a feature to be added in Waterston!\n`!appeal <warning/kick> <reason>` ➜ Appeal a Discord moderation punishment.\n`!requestban <username/id> <reason>` ➜ Request an in-game ban.\n\n**Discord Moderation Commands**\n`!warn <mention> <reason>` ➜ Adds a warning to their user history.\n`!viewwarns <mention>` ➜ View a users warning history.\n`!kick <mention> <reason>` ➜ Kicks a user from the server.\n`!viewkicks <mention>` ➜ View a users kick history.\n`!removelog <mention> <warning/kick_id>` ➜ Removes a warning/kick from a users history.\n`!ban <mention> <reason>` ➜ Bans a user from the server.\n`!mute <mention> <reason>` ➜ Removes a users speaking permission.\n`!unmute <mention> <reason>` ➜ Gives a user speaking permissions.\n\n**Game Moderation Commands**\n*Coming Soon*')
            .setFooter(client.user.username, client.user.displayAvatarURL()) 
        message.author.send(dmembed).catch((error) => {
            return message.channel.send(`:no_entry_sign: Your direct messages are locked. Check your account privacy settings and try again.`);
          });   
        message.channel.send(embed)   
    }}
