const Discord = require('discord.js');

module.exports = {
    name: "ship",
    category: "fun",
    description: "Ship two Discord users and merge their usernames.",
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("You did not mention the first user.")
        if (!args[1]) return message.channel.send("You did not mention the second user.")

        if (args[0] || args[1]) {
            var FirstUser = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
            var SecondUser = message.mentions.members.first(-1) || await message.guild.members.fetch(args[1]);
        }

        if (!FirstUser) return message.channel.send(`First user is invalid. Try again.`)
        if (!SecondUser) return message.channel.send(`Second user is invalid. Try again.`)

        if (FirstUser || SecondUser) {
            const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
            const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
            const SecondUserID = SecondUser.map(user => { return user.user.id })

        const embed = new Discord.MessageEmbed()
        .setColor("#0084ff")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle("Ship Result")
        .setDescription(`Shipped <@${FirstUser.id}> and <@${SecondUserID}>. Their new name is **${FirstUserSliced}${SecondUserSliced}**.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)
        }
    }
}