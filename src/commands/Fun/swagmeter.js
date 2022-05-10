const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('swagmeter')
		.setDescription('Replies with how swag you are!')
        .addUserOption(option => option.setName('target').setDescription('The user who\'s swag meter you wanna see!')),
	async execute(interaction, client, message) {
        const user = interaction.options.getUser('target')
        if (!user) return interaction.reply('Please mention a user!')
        let number = Math.floor(Math.random() * 11);
        if (number == 0) {
            return interaction.reply(`Swag rank for <@${user.id}> is 0 :joy:\n\n:red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 1) {
            return interaction.reply(`Swag rank for <@${user.id}> is 1\n\n:green_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 2) {
            return interaction.reply(`Swag rank for <@${user.id}> is 2\n\n:green_square::green_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 3) {
            return interaction.reply(`Swag rank for <@${user.id}> is 3\n\n:green_square::green_square::green_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 4) {
            return interaction.reply(`Swag rank for <@${user.id}> is 4\n\n:green_square::green_square::green_square::green_square::red_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 5) {
            return interaction.reply(`Swag rank for <@${user.id}> is 5\n\n:green_square::green_square::green_square::green_square::green_square::red_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 6) {
            return interaction.reply(`Swag rank for <@${user.id}> is 6\n\n:green_square::green_square::green_square::green_square::green_square::green_square::red_square::red_square::red_square::red_square:`)
        }
        if (number == 7) {
            return interaction.reply(`Swag rank for <@${user.id}> is 7\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::red_square::red_square::red_square:`)
        }
        if (number == 8) {
            return interaction.reply(`Swag rank for <@${user.id}> is 8\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::red_square::red_square:`)
        }
        if (number == 9) {
            return interaction.reply(`Swag rank for <@${user.id}> is 9\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::red_square:`)
        }
        if (number == 10) {
            return interaction.reply(`Swag rank for <@${user.id}> is 10\n\n:green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square::green_square:`)
        }
	},
};