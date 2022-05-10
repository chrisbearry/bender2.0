const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Replies with a cat picture!'),
	async execute(interaction, client) {
		const {got} = await import("got")
        const response = await got(`https://www.reddit.com/r/catpics/random/.json`);
        let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let catUrl = `https://reddit.com${permalink}`;
            let catImage = content[0].data.children[0].data.url;
            let catUpvotes = content[0].data.children[0].data.ups;
            let catNumComments = content[0].data.children[0].data.num_comments;

            const catEmbed = new MessageEmbed()
                .setTitle(`Cute cat picture<3`)
                .setURL(`${catUrl}`)
                .setImage(catImage, ({ dynamic: true }))
                .setColor("RANDOM")
                .setFooter({ text: `⬆️${catUpvotes} 💬${catNumComments}` })
                interaction.reply({ embeds: [catEmbed] });
	},
};