const { stripIndents } = require('common-tags');

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns command list",
    guildOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send('Pinging...');
        const ping = Math.round(msg.createdTimestamp - message.createdTimestamp);

        if (ping <= 0) {
        return msg.edit('Please try again...');
        }

        return msg.edit(
        stripIndents`
        🏓 **Pong:** \`${ping}ms\`
        💓 **API Latency:** \`${Math.round(message.client.ws.ping)}ms\`
        `,
        );
  }
};
