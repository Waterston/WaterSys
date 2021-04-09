const Discord = require('discord.js');

module.exports = {
    name: "say",
    aliases: ['sudo', 'announce'],
    category: "dev",
    description: "Makes the bot repeat your entered message",
    usage: "<message>",
    ownerOnly: false,
    run: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => role.name === 'Discord Moderator')) return; //message.channel.send(`:no_entry: Insufficient permissions to run this command.`).then(r => r.delete({timeout: 10000}))
        message.delete().catch()
        if (args.length === 0) return message.channel.send(':warning: No message was specified for the bot to repeat.')
        const msg = args.join(' ')
        message.channel.send(msg)
        
    }
}