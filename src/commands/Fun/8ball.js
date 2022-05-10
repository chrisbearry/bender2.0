const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Replies with an 8ball answer!!')
        .addStringOption(option => option.setName('question').setDescription('Your question').setRequired(true)),
	async execute(interaction, client) {
        let number = Math.floor(Math.random() * 6);
        if (number == 0) {
            return interaction.reply('Yes, definitely so.')
        }
        if (number == 1) {
            return interaction.reply('No, definitely not.')
        }
        if (number == 2) {
            return interaction.reply('Ask again later.')
        }
        if (number == 3) {
            return interaction.reply('It is uncertain.')
        }
        if (number == 4) {
            return interaction.reply('Odds are not in your favor.')
        }
        if (number == 5) {
            return interaction.reply('Odds are in your favor.')
        }
	},
};