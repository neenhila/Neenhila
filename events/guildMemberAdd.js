const Discord = require("discord.js");
const client = new Discord.Client();
const guildSettings = require("../modeller/guildSettings.js")
module.exports = {
    name: "guildMemberAdd",
    description: "Birisi sunucuya katıldığında çalışır.",
    once: false,
    execute(member){
        let memberSize = member.guild.memberCount;
        if(!data.welcomeCh){
            member.guild.channels.cache.forEach(x => {
                if(x.type = "text"){
                    if(x.permissionsFor(member.guild.me).has("SEND_MESSAGES")){
                        defaultChannel = x;
                    }
                }
            })
            defaultChannel.send(`Hoşgeldin kanalı ayarlı değil. **Ayarlamak için \`"${data.prefix}welcome"\` yazıp boşluk bırakarak __kanalı etiketleyin!__**`)
        } else if(data.welcomeCh){
            member.guild.channels.cache.get(`${data.welcomeCh}`).send(`${member.user.username} aramıza katıldı! Seninle birlikte ${memberSize} kişiyiz!`)
        }
    }
}