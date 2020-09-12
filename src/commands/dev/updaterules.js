//Bandelqs Creation

const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "updaterules",
    category: "moderation",
	description: "Updates rules",
	guildOnly: true,
	usage: "<mention, id>",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let ure1 = new Discord.MessageEmbed()
        .setColor("#0084ff")
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/746430272224100522/754133120189464616/image0.png?width=1362&height=504`)
	.setDescription(`**Welcome to the OFFICIAL Baylor County, Waterston Discord Server!**\n\n**The State of Waterston was founded and created by Bandelqs and Pearism on Roblox.**\n\n\n***The rules are subject to change at any time. By using the server you acknowledge and agree to following all rules listed below.***`)
	 

	 
	let ure2 = new Discord.MessageEmbed()
	.setTitle(`Section 1, General Server Guidelines`)
	.setDescription(``)
        .setColor("#0084ff")
        .addFields(
		{ name: '1.1: Discord Nicknames', value: `Please set your Discord Nickname as your Roblox Username at all times. If you're in a department, you must include your callsign as well. It must be clearly visible for everyone to see. You should not have your nickname set to something you're not apart of or for example "Cabinet" of a department, use your department issued callsign. Do not include non-affilated State of Waterston entities as well.`, inline: false },
		{ name: '1.2: Respectness', value: `Treat everyone with respect here. Do not treat someone differently based on race, sex, or religion. Targeting someone in order to provoke them is forbidden.`, inline: false },
		{ name: '1.3: Language Speaking', value: `This is an English speaking Discord sever. Please keep all conversations in English or minimal foreign languages. Common phrases between both languages such as Hola, Bonjour, or Uno are allowed.`, inline: false },
		{ name: '1.4: Server Misuse', value: `Do not misuse or abuse anything apart of the server including but not limited to: commands, channels, etc. Keep it relevant to the channel topic in the correct text channels.`, inline: false },
		{ name: '1.5: Profanity', value: `Cursing is allowed but limited to low use. Any use of racist, sexist, or other insulting curse words is not allowed and can result in an imediate ban.`, inline: false },
		{ name: '1.6: Not Safe for Work', value: `NSFW (Not Safe for Work) is strictly forbidden. Make sure your profile pictures and photos are not consisting of pornography, gore, and not have relationship to terrorist organizations. References to NSFW will result in an moderation action and are still not allowed.`, inline: false },
		{ name: '1.7: Message Spam', value: `Do not start spamming (sending the same message indiscriminately to large numbers of recipients on the Internet) members continuously in any channel on this server. This also includes bulk messages also referred to copy-pasta, taking up a lot of space.`, inline: false },
		{ name: '1.8: Member Privacy', value: `Do not expose any personal photos, names, etc. without the persons permission. Please respect each members privacy balance from in real life and Roblox/Discord. This also includes posting unfamilar links/location (IP) grabbers.`, inline: false },
		{ name: '1.9: Advertising', value: `Advertising is strictly forbidden. This includes roblox groups, discord servers, etc. Commerce Approved businesses are exempt from this rule for promoting their own business in Waterston in specified channels. Do not DM people your Discord Servers as well, that will result in an immediate ban.`, inline: false }	
	 )
	
	let ure3 = new Discord.MessageEmbed()
	.setTitle(`Section 2, Voice Channel Guidelines`)
	.setDescription(``)
        .setColor("#0084ff")
        .addFields(
		{ name: '2.1: Background Noise', value: `Try to refrain from having as much as possible background noises. Either enable Push-to-Talk, mute yourself, or stop the noise yourself.`, inline: false },
		{ name: '2.2: Voice Changers', value: `Using a Voice Changer to modify your voice or annoy other members is prohibited.`, inline: false },
		{ name: '2.3: Language Speaking', value: `Explicit language relating to Rule 1.5 is prohibited in voice channels. Please also use English at all times while in voice channels. `, inline: false },
		{ name: '2.4: Live Streams', value: `Make sure what you're doing on your Live/Video Stream is appropriate and follows all general rules.`, inline: false }
	 )
	
	let ure4 = new Discord.MessageEmbed()
	.setTitle(`Section 3, Extra Information`)
	.setDescription(``)
        .setColor("#0084ff")
        .addFields(
		{ name: '3.1: Discord Moderator', value: `Discord Moderators are allowed to deem what your punishment is per breaking a rule. Don't argue with your punishment or you will be muted.`, inline: false },
		{ name: '3.2: Warnings/Kicks Limit', value: `When you recieve 3 warnings, you will be kicked from the State of Waterston. If you receive another 3 warnings when you return, you will be banned. Appealed warnings/kicked will be removed and not counted towards you're next moderation action.`, inline: false },
		{ name: '3.3: Automactic Ban', value: `Raiding, racial profanity, mass-tagging, posting NFSW (pornography/gore), and mass spamming will result in an automactic ban.`, inline: false },
		{ name: '3.4: Zero Tolerance', value: `Waterston uses a Zero Tolerance policy set in place for the entire server from being toxic. Depending on the serverity, you will be automactically muted, warned, or kicked from the server.`, inline: false },
		{ name: '3.5: Waterston Founders', value: `Waterston Founders shall be known as Bandelqs & Pearism. They are above all rules listed above. **Please refrain from tagging them randomly** and use the chain of command module.`, inline: false }
		
	 )
	
	 client.channels.resolve('709052688368664688').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)
         client.channels.resolve('709052688368664688').send(ure1)
	 client.channels.resolve('709052688368664688').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)
	 client.channels.resolve('709052688368664688').send(ure2)
	     client.channels.resolve('709052688368664688').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)
	 client.channels.resolve('709052688368664688').send(ure3)
	     client.channels.resolve('709052688368664688').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)
	 client.channels.resolve('709052688368664688').send(ure4)
	     client.channels.resolve('709052688368664688').send(`https://tenor.com/view/rainbow-line-left-at-right-gif-18243265`)
	   
  }
}; 
