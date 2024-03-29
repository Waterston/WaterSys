const { readdirSync } = require("fs");
const Discord = require('discord.js');
const ascii = require("ascii-table");
//const cooldowns = new Discord.Collection();

let table = new ascii("Commands");
table.setHeading("Command", "Status");

module.exports = (client) => {
    readdirSync(`./src/commands/`).forEach(dir => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let command = require(`../commands/${dir}/${file}`);
    
            if (command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, 'ON');
            } else {
                table.addRow(file, `OFF  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            /// If there's an aliases key, read the aliases.
            if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));

            
            /// If there's a guildOnly key -- not working yet
            /*if (command.guildOnly && message.channel.type !== "text") {
                return message.reply('This command cannot be executed in direct messages.');
            }*/

            /// If there's a ownerOnly key -- not working yet
            /*if (command.ownerOnly == true) {
                if (message.author.id !== config.ownerID) return;
            }*/

           /// If there's a cooldown key, read them as well.
           /* if (!cooldowns.has(commands.name)) {
                cooldowns.set(commands.name, new Discord.Collection());
            }
            
            const now = Date.now();
            const timestamps = cooldowns.get(command.name);
            const cooldownAmount = (command.cooldown || 3) * 1000;
            
            if (timestamps.has(message.author.id)) {
                const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now) / 1000;
                    return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
                }
            }

            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);*/
        }
    });
    // Log the table
    console.log(table.toString());
}
