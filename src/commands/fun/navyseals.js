const Discord = require('discord.js');

module.exports = {
    name: "navyseals",
    aliases: ['navy', 'nv'],
    category: "fun",
    description: "Friendly version of Navy SEALs copypasta",
    usage: "<mention, id>",
    run: async (client, message, args) => {
    if (!message.member.roles.cache.get('709047575180869663')) return;
        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle(`Navy SEALs`)
        .setDescription(`What did you just say about me? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you out with precision the likes of which has never been seen before on this Earth, mark my words. You think you can get away with saying that to me over the Internet? Think again. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe you off the face of the continent. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your tongue. But you couldn’t, you didn’t, and now you’re paying the price, you idiot. I will rain fury all over you and you will drown in it. You’re dead, kiddo.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
