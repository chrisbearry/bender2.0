const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {
		await interaction.reply(`Pong! **${Date.now() - interaction.createdTimestamp}ms**`);
		console.log(`The ping command was executed`)
	},
};