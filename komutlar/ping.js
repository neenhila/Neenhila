module.exports = {
    name: "ping",
    usage: "ping",
    description: "Botun pingini gösterir.",
    cooldown: 20000,
    execute(message, client, Discord){
        message.channel.send('Loading data').then(async (msg) =>{
            msg.delete({timeout: 500});
            message.channel.send(new Discord.MessageEmbed().setDescription(`Client Latency: \`${msg.createdTimestamp - message.createdTimestamp}\` ms \nAPI Latency: \`${Math.round(client.ws.ping)}\` ms`).setColor("GREEN"));
          })
    }
}
