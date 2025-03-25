const { SlashCommandBuilder, ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("servers")
    .setDescription("عرض قائمة السيرفرات"),
  async execute(interaction, client) {
    try {
      const guilds = client.guilds.cache;
      const embed = {
        title: `أنا في ${guilds.size} خادم`,
        description: guilds.map(g => `${g.name} (${g.memberCount})`).join('\n'),
        color: 0x0099ff,
        thumbnail: guilds.first().iconURL() // عرض صورة أول خادم كصورة مصغرة
      };
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: "حدث خطأ.", ephemeral: true });
    }
  },
};
