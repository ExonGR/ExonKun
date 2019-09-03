const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'NjE4NDEwMjAxNjE1NDMzNzM3.XW5Y6g.VuIZIXsfprjitBG_NrfoAZ9JPk8';
const prefix = 'e-';



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



bot.login(token);