const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on('guildMemberAdd', async (member) => {
  try {
    const role = member.guild.roles.cache.get(config.autoRoleID);

    if (role) {
      await member.roles.add(role);
      console.log(`Rôle attribué à ${member.user.tag}`);
    } else {
      console.log('Rôle non trouvé dans le serveur.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout du rôle :', error);
  }
});

client.login(config.token);
