const { stripIndents } = require('common-tags');
const Discord = require('discord.js')

module.exports = {
    name: "verifyinstructions",
	category: "dev",
	hidden: true,
	description: "Updates the verification instructions",
	guildOnly: true,
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('709047380309311568')) return; //message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let usb1 = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setImage(`https://i.imgur.com/cwVphYV.png`)
	 
	let instructionsembed = new Discord.MessageEmbed()
	.setTitle(`Welcome to ${message.guild.name}`)
	.setDescription(`To register and get access to the rest of this Discord server, please run` + "`r!verify` in the registration channel.")
	.setColor("#00a2cb")
  	.addFields(
		{ name: 'Wrong Username?', value: `Even bots can mess up sometimes! You can correct it by visiting: https://verify.eryn.io/ and re-verify.`, inline: false },
		{ name: 'Notice', value: `We plan to improve the verification process by integrating portions of RoVer into WaterSys and making it seamless in the future.`, inline: false }
	 )
	
	 client.channels.resolve('709113605710413896').send(instructionsembed)
	   
  }
}; 
