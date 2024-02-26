
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const InstagramLink = 'https://www.instagram.com/hann19_8/';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://cdn.discordapp.com/attachments/1211643355289755699/1211743470360989786/Pr_199_E7C8162.gif?ex=65ef4f0c&is=65dcda0c&hm=4581c0fb127515aafef6396268cf41fe493dee0f26617e9ca7cb585eecf6f583&',
          url: 'xx'
        })
            .setDescription(`__**About me**__:\n\n ▶️ Myself Hann . I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n Instagram : 💙 [rtxxgg](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
