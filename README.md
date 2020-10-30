# WaterstonSystems
[![Discord](https://img.shields.io/discord/659451316707524618?label=Waterston%20Discord&style=flat-square&logo=Discord)](https://discord.gg/Bt6cpnc)
[![](https://img.shields.io/npm/v/discord.js?label=discord.js&logo=npm&style=flat-square)](https://github.com/discordjs)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=flat-square)

WaterstonSystems is a custom Roblox verification and moderation bot powered with [Discord.js](https://discord.js.org/) and Mongoose(https://mongoosejs.com/).

## Installation
This is intended those that are willing to customize the bot.

### Windows
* Install Node 12.x and MongoDB (if hosting locally)
* Open a Command Prompt/PowerShell/etc. session with elevated privilege and run `npm install -g --production windows-build-tools`.
* Install the bot's dependencies (excluding devDependencies): `npm install --production`
* Set up the environment variables (list below) to include your Discord bot token and Mongoose URI, and replace the default values in `config.json`

## Environment Variables
This Discord bot relies on environment variables to ensure smooth and secure deployments. There is a table listing all the variables the bot will attempt to search for on startup, for future references.
| Variable | Input | Description |
|-|-|-|
| `TOKEN` | https://discord.com/developers/applications | This is your 59-characters token for your bot that is provided by Discord. |
| `MONGOOSE` | https://docs.mongodb.com/manual/reference/connection-string/ | This is where the standard MongoDB URI link will go. |
