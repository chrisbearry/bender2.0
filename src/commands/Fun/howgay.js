const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('Decides how gay you or whoever you mention is!')
        .addUserOption(option => option.setName('target').setDescription(`The user you want to see how gay is!`)),
	async execute(interaction, client) {
        let number = Math.floor(Math.random() * 101);
        const user = interaction.options.getUser('target')

        if (!user) return interaction.reply(`you are ` + number + `% gay :rainbow_flag:`)

        interaction.reply(`${user} is ` + number + `% gay :rainbow_flag:`)
	},
};