const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('عرض قائمة بجميع الأوامر مع شرحها'),
    async execute(interaction) {
        const commandsList = interaction.client.commands.map(command => {
            return {
                name: command.data.name,
                description: command.data.description,
            };
        });
      const embed = new EmbedBuilder()
    .setTitle('قائمة الأوامر')
    .setDescription('هذه قائمة بجميع الأوامر')
    .setFooter({ text: `Developer by M76s9M` });

    commandsList.forEach(command => {
    embed.addFields({ name: `/${command.name}`, value: command.description });

});
       
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
