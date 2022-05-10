const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Replies with a dog picture!'),
	async execute(interaction, client) {
		const {got} = await import("got")
        const response = await got(`https://www.reddit.com/r/dogpictures/random/.json`);
        let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let dogUrl = `https://reddit.com${permalink}`;
            let dogImage = content[0].data.children[0].data.url;
            let dogUpvotes = content[0].data.children[0].data.ups;
            let dogNumComments = content[0].data.children[0].data.num_comments;

            const dogEmbed = new MessageEmbed()
                .setTitle(`Cute dog picture<3`)
                .setURL(`${dogUrl}`)
                .setImage(dogImage, ({ dynamic: true }))
                .setColor("RANDOM")
                .setFooter({ text: `⬆️${dogUpvotes} 💬${dogNumComments}` })
                interaction.reply({ embeds: [dogEmbed] });
	},
};