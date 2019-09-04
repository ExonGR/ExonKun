const Discord = module.require("discord.js");
const urban = module.require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.channel.send("Please enter something")
    console.log(args.join(" "));

}

module.exports.help = {
    name: "urban"
}