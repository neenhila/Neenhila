const mongoose = require("mongoose");
const guildSettings = require("../modeller/guildSettings.js");
module.exports = {
    name: "setupPrefix",
    usage: "prefix",
    description: "Prefix'i ayarlamanızı sağlar.",
    execute(message, prefix){
        const args = message.content.slice().split(" ");
        if(!message.member.hasPermission("ADMINISTRATOR")) return;

        if(!args[1]){
            return message.reply(`Değiştirilecek prefixi belirtmediniz! **Şu anki prefixiniz: \`${data.prefix}\`** `);
        } else {
            guildSettings.findOne({
                id: message.guild.id,
            }).then(guild1 => {
                guild1.prefix = `${args[1]}`;
                guild1.save().catch(err => console.log(err))
            })
            message.channel.send(`Yeni prefixiniz \`${args[1]}\` olarak ayarlandı!`);
        }
    }
    
}
