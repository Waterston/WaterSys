const { stripIndents } = require('common-tags');
const Discord = require('discord.js')

module.exports = {
    name: "updaterules",
	category: "dev",
	hidden: true,
	description: "Post the currently defined server rules",
	guildOnly: true,
    run: async (client, message, args) => {
        if (!message.member.roles.cache.get('659591143050444830')) return; //message.channel.send(`⛔ Insufficient permissions.`).then(r => r.delete({timeout: 10000}))
	    
	let ure1 = new Discord.MessageEmbed()
    .setColor("#00a2cb")
    //.setImage(`https://i.imgur.com/cwVphYV.png`)
	.setTitle(`Welcome to the official ${message.guild.name} Discord server!`)
	.addFields(
		{ name: 'Disclaimer', value: `The rules are __subject to change at any time__. By joining this server, you acknowledge and agree to the following rules listed below.`}
	)
	 
	let ure2 = new Discord.MessageEmbed()
	.setTitle(`Section 1, General Server Guidelines`)
    .setColor("#feca21")
    .addFields(
		{ name: '1.1: Discord Nicknames', value: `Please set your Discord nickname as your Roblox username at all times. You may have one appropriate emoji and symbol in your username, however the text must not have unusual fonts.`, inline: false },
		{ name: '1.2: Respecting Members', value: `Treat everyone with respect here. Do not treat someone differently based on race, sex, sexual orientation, disability, or religious belief. Targeting someone in order to provoke them is forbidden.`, inline: false },
		{ name: '1.3: Language Speaking', value: `This is an English speaking Discord server. Please keep all conversations in English or minimal foreign languages. Common phrases between both languages such as Hola, Bonjour, or Uno are allowed.`, inline: false },
		{ name: '1.4: Server Misuse', value: `Do not misuse/abuse anything apart of the server, including, but not limited to: commands, channels, etc. Keep it relevant to the channel topic in the correct text channels.`, inline: false },
		{ name: '1.5: Profanity', value: `Cursing is allowed but limited to low use. Any use of racist, sexist, ableist, or other insulting curse words/slurs are not allowed and can result in an immediate ban.`, inline: false },
		{ name: '1.6: Not Safe for Work', value: `NSFW (Not Safe for Work) is strictly forbidden. Your profile picture and photos should not contain pornography, gore, etc., and not have a relationship with terrorist organizations. References to NSFW will result in a moderation action and are still not allowed.`, inline: false },
		{ name: '1.7: Message Spam', value: `Do not start spamming (sending the same message indiscriminately to large numbers of recipients) members continuously in any channel on this server. This also includes bulk messages also referred to as copy-pasta, taking up a lot of space.`, inline: false },
		{ name: '1.8: Member Privacy', value: `Do not expose any personal information without that person's permission. Please respect each members' privacy balance from real life and Discord or other online services. This also includes posting unfamiliar links (fake Discord Nitro links, IP grabbers, cookie loggers, etc.)`, inline: false },
		{ name: '1.9: Advertisement', value: `Advertising is strictly forbidden. This includes Roblox groups, Discord servers, etc. Do not send unsolicited messages to people, as that is prohibited.`, inline: false },
		{ name: '1.10: Controversial Topics', value: `When chatting with other server members, please avoid discussing controversial topic that may be current events, politics, religion, etc. It can potentially be seen as offensive or toxic.`, inline: false },
		{ name: '1.11: Bot Usage', value: `Bot commands should only be used in <#709055932470001774>. Failure to do so will result in a warning. Community Managers and above are allowed to use bot commands in any channels.`, inline: false }	
	 )
	
	let ure3 = new Discord.MessageEmbed()
	.setTitle(`Section 2, Voice Channel Guidelines`)
    .setColor("#000000")
        .addFields(
		{ name: '2.1: Background Noise', value: `Try to refrain from having as much as possible background noises. Either enable Push-to-Talk, mute yourself, or stop the source of background noise yourself.`, inline: false },
		{ name: '2.2: Voice Changers', value: `Using a voice changer or a soundboard to modify your voice or annoy other members is prohibited.`, inline: false },
		{ name: '2.3: Language Speaking', value: `Explicit language relating to Rule 1.5 is prohibited in voice channels. Please also use English at all times while in voice channels.`, inline: false },
		{ name: '2.4: Live/Video Stream', value: `Make sure your live/video stream is appropriate for everyone and follows all general rules listed here.`, inline: false }
	 )
	
	let ure4 = new Discord.MessageEmbed()
	.setTitle(`Section 3, Extra Information`)
    .setColor("#bc9378")
        .addFields(
		{ name: '3.1: Discord Moderators', value: `Discord Moderators have final say on deeming what your punishment is based on what rule(s) were broken. Do not publicly make a dispute with your punishment or you will be muted.`, inline: false },
		{ name: '3.2: Warnings/Kicks Limit', value: `When you receive three (3) warnings, you will be kicked from the server. If you receive another three (3) warnings when you return, you will be banned. Appealed warnings/kicks will be removed and not counted towards your next moderation action.`, inline: false },
		{ name: '3.3: Zero Tolerance', value: `${message.guild.name} uses a Zero Tolerance policy set in place to prevent toxicity among server members. Raiding, racial profanity, mass-tagging, posting NSFW (pornography/gore), and mass spamming will result in an automatic ban. Depending on the severity of the rule broken, you will be automatically muted, warned, or kicked from the server.`, inline: false },
		{ name: '3.4: Common Sense', value: `Please use common sense and basic knowledge when conducting yourself. Do not do anything that you know will get you punished. Additionally, do not try to exploit loopholes in the rules as it will apply to any situations.`, inline: false },
		{ name: '3.5: Impersonation', value: `Any form of impersonation (via username, profile picture, similar Roblox username, etc.) of another user is prohibited and will result in a permanent ban. Waterston moderators will never ask for your personal information or account passwords.`, inline: false },
		{ name: '3.6: State of Waterston Founders', value: `${message.guild.name} founders shall be known as Pearism, JaimieKoch, and GlockOperative. They are above all rules listed above. **Please refrain from tagging without a plausible reason** and use the chain of command system.`, inline: false },
		{ name: '3.7: Prior Moderation Actions', value: `Discord Moderators reserve the right to remove anyone from this server if they have been banned from other servers due to pedophilia, sexual harassment/exploitation, or leaking personal information.`},
		{ name: '3.8: Discord Term of Services & Community Guidelines', value: `We are required to ensure that this server follows the [Terms of Service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines) set by Discord (linked for your convenience). We are also legally required to remove any user that is under the age of thirteen (13) years old. It is recommended that you avoid discussing or joking about your ages, as there are no exceptions in the Terms of Service.`, inline: false }
		
	 )

	 let ure5 = new Discord.MessageEmbed()
	 .setTitle(`Section 4, Conclusion`)
	 .setColor("#0099bc")
		 .addFields(
		 { name: '4.1: Contact Methods', value: `If you see something that violates the rules listed here, make sure to notify a moderator immediately, preferably by Direct Messages. It is best to not confront people yourself if they are violating rules.`, inline: false },
		 { name: '4.2: Questions', value: `Additionally, if you have any questions about the rules, you are welcome to message any moderators.`, inline: false },
		 { name: '4.3: Discord Trust & Safety', value: `Should you happen to come across anything that requires Discord's attention, you may [file a ticket on the website](https://support.discord.com/hc/en-us/requests/new).`}
		 
	)
	
     client.channels.resolve('709052688368664688').send(ure1)
	 //client.channels.resolve('800036709756436551').send(`https://i.imgur.com/t3g96kU.gif`)
	 client.channels.resolve('709052688368664688').send(ure2)
	 //client.channels.resolve('800036709756436551').send(`https://i.imgur.com/t3g96kU.gif`)
	 client.channels.resolve('709052688368664688').send(ure3)
	 //client.channels.resolve('800036709756436551').send(`https://i.imgur.com/t3g96kU.gif`)
	 client.channels.resolve('709052688368664688').send(ure4)
	 //client.channels.resolve('800036709756436551').send(`https://i.imgur.com/t3g96kU.gif`)
	 client.channels.resolve('709052688368664688').send(ure5)
	   
  }
}; 
