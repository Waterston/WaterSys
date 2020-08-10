const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "s",
    category: "moderation",
    description: "sssssssssssssssssssss",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('709047575180869663')) return 

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "sizzle"

        return client.channels.resolve('659849101847953410').send(reason)
    
  }
}; 
