const Discord = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'frozen');
 
  if (!channel) return;
  channel.send(`Welcome to Fr0zen back :fallen_leaf:,);
});


client.login(process.env.BOT_TOKEN);