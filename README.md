# WaterstonBotv2
[![Discord](https://img.shields.io/discord/659451316707524618?label=Waterston%20Discord&style=flat-square&logo=Discord)](https://discord.gg/Bt6cpnc)
[![](https://img.shields.io/badge/discord.js-v12.0.0--dev-blue.svg?logo=npm&style=flat-square)](https://github.com/discordjs)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=flat-square)

The repository for the WaterstonSystem, the custom Discord bot for Roblox verification and moderation.

### Installation
WaterstonSystems is powered by [Node.js](https://nodejs.org/) and [Discord.js](https://discord.js.org/).

The bot is mainly for private use, and as such, we will not provide instruction on how to install for your own use.

### Environment Variables
This Discord bot relies on environment variables to ensure smooth and secure deployments. There is a table listing all the variables the bot will attempt to search for on startup, for future references.
| Variable | Input | Description |
|-|-|-|
| `TOKEN` | https://discord.com/developers/applications | This is your 59-characters token for your bot that is provided by Discord. |
| `MONGOOSE` | https://docs.mongodb.com/manual/reference/connection-string/ | This is where the standard MongoDB URI link will go. |
