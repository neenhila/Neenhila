module.exports = {
    name: "stats",
    usage: "stats",
    cooldown: 20000,
    description: "Sunucunun statlarını gösterir.",
    execute(message, client, Discord){
        message.channel.send("Data yükleniyor.").then(msg => {
            msg.delete();

            let embed = new Discord.MessageEmbed()
            .setAuthor(`Neenhila Discord Bot İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Merhaba, bu bot tarafımca (Neenhila#0666) hazırlanan ilk public botudur. Elbette eksileri olacaktır. Bunları bana bildirmekten çekinmeyin. Bota __**!öneri boşluk mesajınızı**__ yazarak bana iletebilirsiniz.\n\n`)
            .setThumbnail(client.user.displayAvatarURL({dynmaic: true}))
            .addFields(
                {name: "<a:RainbowOkGif:869301898946158763> Bot Pingi", value:`  >>> \`${msg.createdTimestamp - message.createdTimestamp}\` ms`, inline: true},
            
                {name: "<a:RainbowOkGif:869301898946158763> Discord API Pingi", value:`  >>> \`${client.ws.ping}\` ms`, inline: true},

                {name: "<a:SabitGif:869301913089355857> Bot kaç sunucuda aktif?", value:`>>> \`${client.guilds.cache.size}\` guild(s)`, inline: false},

                {name: "<a:AyarGif:869301910853795921> Botun prefixini nasıl ayarlarım?", value:">>> **!prefix [prefixiniz]** yaparak botun prefixini değiştirebilirsiniz!", inline: false},

                {name: "<a:AyarGif:869301910853795921> Botun temel komutları nelerdir?", value:">>> **!welcome** ile hoşgeldin kanalınızı ayarlayabilirsiniz.\n**!goodbye** ile güle güle kanalını ayarlayabilirsiniz.\n**!help** ile yardım menüsünden detaylı bilgilere ulaşabilirsiniz.", inline: false}

            )
            .setFooter(`${message.author.tag} tarafından istendi!`, message.author.displayAvatarURL({dynmaic: true}))
            .setTimestamp()
            
            message.channel.send(embed)
        })
    }
}
