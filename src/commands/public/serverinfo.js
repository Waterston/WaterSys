const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    aliases: ['sinfo', 'server'],
    category: "public",
    description: "Retrieve information for the current server",
    usage: "<mention, id>",
    run: async (client, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    //let verifLevels = ["None", "Low", "Medium", "High", "Maximum"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "europe": ":flag_eu: Europe",
        "hongkong": ":flag_hk: Hong Kong",
        "india": ":flag_in: India",
        "japan": ":flag_jp: Japan",
        "russia": ":flag_ru: Russia",
        "singapore": ":flag_sg: Singapore",
        "southafrica": ":flag_za:  South Africa",
        "sydney": ":flag_au: Sydney",
        "us-central": ":flag_us: U.S. Central",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "vip-us-east": ":flag_us: U.S. East (VIP)",
    };        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor("#0084ff")
        .addField("Name", message.guild.name, true)
        .addField("Server ID", message.guild.id, true)
        .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Region", region[message.guild.region], true)
        .addField("Members | Bots", `${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        //.addField("Verification Level", verifLevels[guild.verificationLevel], true)
        .addField("Total Channels", message.guild.channels.cache.size, true)
        .addField('Text Channels',`${message.guild.channels.cache.filter(m => m.type === 'text').size}`,true)
        .addField('Voice Channels',`${message.guild.channels.cache.filter(m => m.type === 'voice').size}`,true)
        .addField("Roles", message.guild.roles.cache.size, true)
        .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 256 }))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
    }
}
