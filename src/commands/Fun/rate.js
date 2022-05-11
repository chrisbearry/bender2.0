const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rate')
		.setDescription('Rates you or whoever you mention!')
        .addUserOption(option => option.setName('target').setDescription(`The user you want to rate!`)),
	async execute(interaction, client) {
        let number = Math.floor(Math.random() * 101);
        const user = interaction.options.getUser('target')

        if (!user) return interaction.reply(`I rate you ` + number + `/100`)

        interaction.reply(`I rate ${user} ` + number + `/100`)
	},
};