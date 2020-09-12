
const { stripIndents } = require('common-tags');
let Discord = require('discord.js')

module.exports = {
    name: "updaterules",
    category: "dev",
	description: "Post the currently defined server rules",
	guildOnly: true,
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	 let ure1 = new Discord.MessageEmbed()
    .setColor("#0084ff")
    .setImage('.../assets/png/baylorcounty.png')
	.setDescription(`**Welcome to the official Baylor County, Waterston Discord Server!**\n\nThe State of Waterston was founded and created by Bandelqs and Pearism on Roblox.\n\n\n**The rules are __subject to change at any time__. By using the server you acknowledge and agree to following all rules listed below.**`)
	 
	let ure2 = new Discord.MessageEmbed()
	.setTitle(`Section 1, General Server Guidelines`)
    .setColor("#00a2cb")
        .addFields(
		{ name: '1.1: Discord Nicknames', value: `Please set your Discord nickname as your Roblox username at all times. If you're in a department, you must include your callsign as well. It must be clearly visible for everyone to see. You should not have your nickname set to something you're not apart of or for example "Cabinet" of a department, use your department issued callsign. Do not include non-affilated State of Waterston entities as well.`, inline: false },
		{ name: '1.2: Respecting Members', value: `Treat everyone with respect here. Do not treat someone differently based on race, sex, sexual orientation, disability, or religious belief. Targeting someone in order to provoke them is forbidden.`, inline: false },
		{ name: '1.3: Language Speaking', value: `This is an English speaking Discord sever. Please keep all conversations in English or minimal foreign languages. Common phrases between both languages such as Hola, Bonjour, or Uno are allowed.`, inline: false },
		{ name: '1.4: Server Misuse', value: `Do not misuse or abuse anything apart of the server including but not limited to: commands, channels, etc. Keep it relevant to the channel topic in the correct text channels.`, inline: false },
		{ name: '1.5: Profanity', value: `Cursing is allowed but limited to low use. Any use of racist, sexist, or other insulting curse words/slurs is not allowed and can result in an immediate ban.`, inline: false },
		{ name: '1.6: Not Safe for Work', value: `NSFW (Not Safe for Work) is strictly forbidden. Make sure your profile pictures and photos are not consisting of pornography, gore, and not have relationship to terrorist organizations. References to NSFW will result in an moderation action and are still not allowed.`, inline: false },
		{ name: '1.7: Message Spam', value: `Do not start spamming (sending the same message indiscriminately to large numbers of recipients) members continuously in any channel on this server. This also includes bulk messages also referred to copy-pasta, taking up a lot of space.`, inline: false },
		{ name: '1.8: Member Privacy', value: `Do not expose any personal photos, names, etc. without the person's permission. Please respect each members' privacy balance from in real life and Roblox/Discord. This also includes posting unfamiliar links/location (IP) grabbers.`, inline: false },
		{ name: '1.9: Advertising', value: `Advertising is strictly forbidden. This includes Roblox groups, discord servers, etc. Commerce-approved businesses are exempt from this rule for promoting their own business in Waterston in specified channels. Do not DM people your Discord Servers as well, that will result in an immediate ban.`, inline: false }	
	 )
	
	let ure3 = new Discord.MessageEmbed()
	.setTitle(`Section 2, Voice Channel Guidelines`)
    .setColor("#feca21")
        .addFields(
		{ name: '2.1: Background Noise', value: `Try to refrain from having as much as possible background noises. Either enable Push-to-Talk, mute yourself, or stop the noise yourself.`, inline: false },
		{ name: '2.2: Voice Changers', value: `Using a Voice Changer to modify your voice or annoy other members is prohibited.`, inline: false },
		{ name: '2.3: Language Speaking', value: `Explicit language relating to Rule 1.5 is prohibited in voice channels. Please also use English at all times while in voice channels. `, inline: false },
		{ name: '2.4: Live Streams', value: `Make sure what you're doing on your Live/Video Stream is appropriate and follows all general rules.`, inline: false }
	 )
	
	let ure4 = new Discord.MessageEmbed()
	.setTitle(`Section 3, Extra Information`)
    .setColor("#bc9378")
        .addFields(
		{ name: '3.1: Discord Moderator', value: `Discord Moderators are allowed to deem what your punishment is per breaking a rule. Don't argue with your punishment or you will be muted.`, inline: false },
		{ name: '3.2: Warnings/Kicks Limit', value: `When you recieve 3 warnings, you will be kicked from State of Waterston. If you receive another 3 warnings when you return, you will be banned. Appealed warnings/kicked will be removed and not counted towards your next moderation action.`, inline: false },
		{ name: '3.4: Zero Tolerance', value: `Waterston uses a Zero Tolerance policy set in place for to prevent the entire server from being toxic. Raiding, racial profanity, mass-tagging, posting NSFW (pornography/gore), and mass spamming will result in an automactic ban. Depending on the serverity of the rule broken, you will be automactically muted, warned, or kicked from the server.`, inline: false },
		{ name: '3.5: Waterston Founders', value: `Waterston Founders shall be known as Bandelqs & Pearism. They are above all rules listed above. **Please refrain from tagging without a plausible reason** and use the chain of command system.`, inline: false }
		
	 )
	
     client.channels.resolve('709052688368664688').send(ure1)
	 client.channels.resolve('709052688368664688').send('.../assets/gif/rainbowline.gif')
	 client.channels.resolve('709052688368664688').send(ure2)
	 client.channels.resolve('709052688368664688').send('.../assets/gif/rainbowline.gif')
	 client.channels.resolve('709052688368664688').send(ure3)
	 client.channels.resolve('709052688368664688').send('.../assets/gif/rainbowline.gif')
	 client.channels.resolve('709052688368664688').send(ure4)
	 client.channels.resolve('709052688368664688').send('.../assets/gif/rainbowline.gif')
	   
  }
}; 
