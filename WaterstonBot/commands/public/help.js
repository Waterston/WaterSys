const Discord = require('discord.js');

module.exports = {
    name: "help",
    category: "info",
    description: "Returns command list",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setTitle(`Help Command`)
            .setColor("#0084ff")
            .setDescription(`Check your Direct Messages! You've been sent a list of public access commands.`)
            .setTimestamp()
            .setFooter("WaterstonSystems", client.user.displayAvatarURL) 
            
            
        const dmembed = new Discord.MessageEmbed()
            .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
            .setColor("#0084ff")
            .setTitle(`WaterstonSystems Help Command`)
            .setTimestamp()
            .setDescription('**Bot Username: ** `WaterstonSystems`\n**Bot Library: ** `Node, Discord.js`\n**Bot Prefix: `!`**\n\n**Public Commands**\n`!help` ➜ Displays bot information and commands.\n`!ping` ➜ Displays bot ping latency.\n`!appeal <warning/kick> <reason>` ➜ Appeal a Discord moderation punishment.\n`!requestban <username/id> <reason>` ➜ Request an in-game ban.\n\n**Discord Moderation Commands**\n`!warn <mention> <reason>` ➜ Adds a warning to their user history.\n`!viewwarnings <mention>` ➜ View a users warning history.\n`!kick <mention> <reason>` ➜ Kicks a user from the server.\n`!viewkicks <mention>` ➜ View a users kick history.\n`!removelog <mention> <warning/kick_id>` ➜ Removes a warning/kick from a users history.\n\n**Game Moderation Commands**\n*Coming Soon*')
            .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(dmembed)       
    }}