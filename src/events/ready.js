module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setStatus('online');
		client.user.setActivity('This is a test', {
			type: "STREAMING",
			url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		})
	},
};