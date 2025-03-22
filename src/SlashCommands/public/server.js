const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder,PermissionFlagsBits } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Server Info '),



 async execute(interaction, client) {
   let clientMember = await interaction.guild.members.fetch(client.user.id);
   if (!clientMember.permissions.has(PermissionFlagsBits.SendMessages)) return interaction.reply({content: `Im Dont Have Permission`, ephemeral: true})
    const members = interaction.guild.members.cache;
         const channels = interaction.guild.channels.cache;
      const emojis = interaction.guild.emojis.cache.size;
      const firstFiveEmojis = interaction.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
      const boostCount = interaction.guild.premiumSubscriptionCount;
      const verificationLevel = interaction.guild.verificationLevel;
      const rolesCount = interaction.guild.roles.cache.size;

    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Server Info')
    .setAuthor({name: `${interaction.guild.name} is info`, iconURL: interaction.guild.iconURL({dynamic: true, size: 1024, format: 'png'})})
