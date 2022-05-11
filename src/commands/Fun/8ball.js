const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Replies with an 8ball answer!!')
        .addStringOption(option => option.setName('question').setDescription('Your question').setRequired(true)),
	async execute(interaction, client) {
        const question = interaction.options.getString('question')
        const user = interaction.user.username;
        let number = Math.floor(Math.random() * 6);
        const embed1 = new MessageEmbed()
                .setTitle(`${user} asked ${question}?`)
                .setDescription("No, definitely not.")
                .setColor("RANDOM")

                const embed2 = new MessageEmbed()
                .setTitle(`${user} asked ${question}?`)
                .setDescription("Ask again later.")
                .setColor("RANDOM")

                const embed3 = new MessageEmbed()
                .setTitle(`${user} asked ${question}?`)
                .setDescription("It is uncertain.")
                .setColor("RANDOM")
                
                const embed4 = new MessageEmbed()
                .setTitle(`${user} asked ${question}?`)
                .setDescription("Odds are not in your favor.")
                .setColor("RANDOM")

                const embed5 = new MessageEmbed()
                .setTitle(`${user} asked ${question}?`)
                .setDescription("Odds are in your favor.")
                .setColor("RANDOM")

                const embed6 = new MessageEmbed()
                .setTitle(`${user} asked ${question}?`)
                .setDescription("Yes, definitely so.")
                .setColor("RANDOM")
        if (number == 0) {
            return interaction.reply({ embeds: [embed1] })
        }
        if (number == 1) {
            return interaction.reply({ embeds: [embed2] })
        }
        if (number == 2) {
            return interaction.reply({ embeds: [embed3] })
        }
        if (number == 3) {
            return interaction.reply({ embeds: [embed4] })
        }
        if (number == 4) {
            return interaction.reply({ embeds: [embed5] })
        }
        if (number == 5) {
            return interaction.reply({ embeds: [embed6] })
        }
	},
};
