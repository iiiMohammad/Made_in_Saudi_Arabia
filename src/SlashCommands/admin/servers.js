const { SlashCommandBuilder, ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("servers") // اسم الأمر: servers
    .setDescription("عرض قائمة السيرفرات التي يتواجد بها البوت"), // وصف الأمر

  /**
   * @param {ChatInputCommandInteraction} interaction - التفاعل الذي أدى إلى استدعاء الأمر
   * @param {Client} client - كائن العميل (البوت)
   */
  async execute(interaction, client) {
    try {
      // جلب جميع الخوادم التي يتواجد بها البوت
      const guilds = client.guilds.cache;

      // إنشاء رسالة مضمنة (Embed)
      const embed = new EmbedBuilder()
        .setTitle(`أنا متواجد في ${guilds.size} خادم`) // عنوان الرسالة المضمنة
        .setDescription("قائمة الخوادم التي أتواجد بها:") // وصف الرسالة المضمنة
        .setColor("#0099ff"); // لون الرسالة المضمنة

      // إضافة حقول لكل خادم
      guilds.forEach((guild) => {
        embed.addFields({
          name: guild.name, // اسم الخادم
          value: `الأعضاء: ${guild.memberCount}`, // عدد الأعضاء في الخادم
          inline: true,
        });
        if (guild.iconURL()) {
          embed.setThumbnail(guild.iconURL())
        }
      });

      // إرسال الرسالة المضمنة
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: "حدث خطأ أثناء جلب قائمة الخوادم.", ephemeral: true });
    }
  },
};
