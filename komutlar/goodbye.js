const mongoose = require("mongoose");
const guildSettings = require("../modeller/guildSettings.js");
module.exports = {
    name: "setupGoodbye",
    usage: "goodbye",
    description: "Goodbye kanalını ayarlamanızı sağlar.",
    execute(message, prefix){
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        const args = message.content.slice().split(" ");
        const etiketCh = message.mentions.channels.first();
        if(!etiketCh){
            return message.reply(`Değiştirilecek kanalı etiketlemediniz! **Şu anki güle güle kanalınız: \`${data.goodbyeCh}\`** `);
        } else {
            guildSettings.findOne({
                id: message.guild.id,
            }).then(guild1 => {
                guild1.goodbyeCh = `${etiketCh.id}`
                guild1.save().catch(err => console.log(err))
            })
            message.channel.send(`Yeni güle güle kanalınız <#${etiketCh.id}> olarak ayarlandı!`);
        }
    }
    
}
