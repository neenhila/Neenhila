module.exports = {
    name: "ping",
    usage: "ping",
    description: "Botun pingini gösterir.",
    cooldown: 20000,
    execute(message, client, Discord){
        if(client.ws.ping > 150) {color = "RED"} else {color = "GREEN"}
        let emb = new Discord.MessageEmbed()
        .setDescription(`**${client.user.tag}** olarak \`${client.ws.ping}\` ping ile hizmet vermekteyim.`)
        .setColor(color)

        message.channel.send(emb);
    }
}
