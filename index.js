const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = 'e-';

bot.on('ready', () => {
  bot.user.setStatus('dnd')
  bot.user.setPresence({
      game: {
          name: 'Ricardo',
          type: "WATCHING",
          
          
      }
  });
});

bot.on('message', msg => {
    if (msg.content === 'Begin'){
      msg.channel.send('Your dad gay')
    }
})

bot.on('message', msg => {
    if (msg.content === 'no,u'){
      msg.channel.send('Your dad gay')
    }
})

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'ping')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Pong",
              value: "My Ping: " + Math.round(bot.ping) + ' ms'
        }
      ]
    } 
  })
}})

bot.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
switch (args[0]) {
    case 'avatar':
      const user = message.mentions.users.first() || message.author;
      const AvatarEmbed = new Discord.RichEmbed()
        .setTitle('Here ya go')
        .setImage(user.avatarURL)
        .setColor(0xFF0000)
        .setFooter('You are welcome');
      message.channel.sendEmbed(AvatarEmbed);
      break;
    }
})



bot.login(process.env.BOT_TOKEN);
