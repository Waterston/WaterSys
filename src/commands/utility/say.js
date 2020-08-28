const Discord = require('discord.js');

module.exports = {
    name: "say",
    aliases: ['speak', 'chat'],
    category: "utility",
    description: "Chat in a channel with the bot",
    usage: "<channel> <message>",
    run: async (client, message, args) => {
      if (!message.member.roles.cache.get('709047575180869663')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
      if (message.mentions.channels.size == 0) {
          message.reply("please mention a channel first.");
      }
      else {
          let targetChannel = message.mentions.channels.first();
          // Get the message to print

          const args = message.content.split(" ").slice(2);
          let saytext = args.join(" ");
          targetChannel.send(saytext);
          message.delete();
      }
    }
