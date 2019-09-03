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
          case 'help':
          const exampleEmbed = new Discord.RichEmbed()
          .setColor('#cc99ff')
          .setTitle('Help Command Section')
          .setImage("https://cdn.discordapp.com/attachments/615288096245678082/618536403017662475/COMMANDS.png")
          .addField('Prefix is e-')
          .addField('avatar', 'shows your avatar duhhh')
          .addField('Ricardo', 'Without prefix :3')
          .addField('omae wa mou shindeiru', 'Without Prefix :3')
          .addField('ping', 'pong')
          .setTimestamp()
        
        message.channel.send(exampleEmbed);
    }
})
    


bot.on('message', message=>{

  let args = message.content.substring(prefix.length).split(" ");

  switch(args[0]){
    case 'exon':
      const attachment = new Attachment('./exon.mp3')
      message.channel.send(message.author, attachment);
      break;
      
  }
})

 
bot.on('message', message=>{
  if (message.content === 'Who are you \<@&618563953001234432>'){
    const attachment = new Attachment('./exon.mp3')
    message.channel.send(message.author, attachment);
  }
})

bot.on('message', message=>{
  if (message.content === 'TMYK'){
    const attachment = new Attachment('./TMYK.jpg')
    message.channel.send(message.author, attachment);
  }
})


bot.login(process.env.BOT_TOKEN);
