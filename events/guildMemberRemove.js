const Discord = require("discord.js");
const client = new Discord.Client();
const guildSettings = require("../modeller/guildSettings.js")
module.exports = {
    name: "guildMemberRemove",
    description: "Birisi sunucudan ayrıldığında çalışır.",
    once: false,
    execute(member){
        if(member.id === "868493541242974230") return;
        let memberSize = member.guild.memberCount;
        if(!data.goodbyeCh){
            member.guild.channels.cache.forEach(x => {
                if(x.type = "text"){
                    if(x.permissionsFor(member.guild.me).has("SEND_MESSAGES")){
                        defaultChannel = x;
                    }
                }
            })
            defaultChannel.send(`Güle güle kanalı ayarlı değil. **Ayarlamak için \`"${data.prefix}goodbye"\` yazıp boşluk bırakarak __kanalı etiketleyin!__**\n\n **${member.user.username}** aramızdan ayrıldı.`)
        } else if(data.goodbyeCh){
            member.guild.channels.cache.get(`${data.goodbyeCh}`).send(`${member.user.username} aramızdan ayrıldı! Artık ${memberSize} kişiyiz!`)
        }
    }
}
