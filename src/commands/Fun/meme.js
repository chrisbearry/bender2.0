const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Replies with a meme!'),
	async execute(interaction, client, Discord) {
            const {got} = await import("got")
            const response = await got(`https://www.reddit.com/r/memes/random/.json`);
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;

            const memeEmbed = new MessageEmbed()
                .setTitle(`${memeTitle}`)
                .setURL(`${memeUrl}`)
                .setImage(memeImage, ({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setFooter({ text: `👍${memeUpvotes} 👎${memeDownvotes} 💬${memeNumComments}` })
                interaction.reply({ embeds: [memeEmbed] });
	},
};
