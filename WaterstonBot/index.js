const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now connected to servers and loaded commands.`);
    const ruleschannel = client.channels.cache.find(channel => channel.name === "server guidelines")
    const rulesembed = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setTimestamp()
    .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
    .setTitle(':person_surfing: Welcome to the Official Waterston Discord! :person_surfing:')
    .setDescription("**Server Guidelines**\n**1.** Please set your Discord Nickname to your Roblox Username at all times. If you're in a department, you must include your callsign in it as well. It must be clearly visible at all times.\n**2.** Treat everyone with respect here. Do not treat someone differently based on race, sex, or religion. Targeting someone in order to provoke them is forbidden.")

    client.user.setPresence({
        status: "online",
        game: {
            name: "alpha development",
            type: "WATCHING"
        }
    }); 
})

client.on("guildMemberAdd", member =>{
    const channel = client.channels.cache.find(channel => channel.name === "general")
    const welcomeembed = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setTimestamp()
    .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    .setAuthor(`WaterstonSystems`, client.user.displayAvatarURL())
    .setTitle("Welcome to the State of Waterston")
    .setDescription(`Hi, ${member}. We're happy that you decided to join the State of Waterston Discord Server! While you are here, please review our Server Guidelines and Discord Terms of Service!`)
    .addField('Roblox Group', `https://www.roblox.com/groups/5231364/State-of-Waterston`)
    .addField('Punishment Database', '*Coming Soon*')
    const welcomegeneralembed = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setTimestamp()
    .setFooter("WaterstonSystems", client.user.displayAvatarURL()) 
    .setTitle("Welcome to the State of Waterston")
    .setDescription(`${member} has joined the State of Waterston! Make sure to review our Server Guidelines and Discord Terms of Service!`)
    channel.send(welcomegeneralembed);
    member.send(welcomeembed);
})



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