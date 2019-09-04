const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = 'e-';
const fs = require('fs');
const {Client, Attachment} = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

// Load commands
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    if (props.help && props.help.name) {
      bot.commands.set(props.help.name, props);
    } else {
      console.error(`file ${f} does not have .help or .help.name property!`);
    }
    
  });
});

//Message event
bot.afk = new Map();
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (message.content.includes(message.mentions.users.first())) {
    bot.afk.forEach(key => {
      if (key.id == message.mentions.users.first().id) {
        message.guild.fetchMember(key.id).then(member => {
          let user_tag = member.user.tag;
          return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
        });
      }
    });
  }

  
  bot.afk.forEach(key => {
    if (message.author.id == key.id) {
      bot.afk.delete(message.author.id);
      return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));
    }
  });

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});
//////////

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
  if (message.content === 'Who are you ExonKun?'){
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
