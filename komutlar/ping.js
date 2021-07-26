const Discord = require("discord.js")
const client = new Discord.Client();

module.exports = {
    name: "ping",
    usage: "ping",
    description: "Botun pingini gösterir.",
    cooldown: 20000,
    execute(message, client){
        if(client.ws.ping > 100) {color = "RED"} else {color = "GREEN"}
        let emb = new Discord.MessageEmbed()
        .setDescription(`**${client.user.username}#${client.user.discriminator}** olarak \`${client.ws.ping}\` ping ile hizmet vermekteyim.`)
        .setColor(color)

        message.channel.send(emb);
    }
}
