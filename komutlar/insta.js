const userInstagram = require("user-instagram");

module.exports = {
    name: "instagram",
    usage: "insta",
    cooldown: 10,
    description: "Instagram hesabınız hakkında bilgi verir.",
    execute(message, Discord){
        const kullanıcı = message.content.split(" ").slice(1).join(" ");
        userInstagram(`${kullanıcı}`).then(data => {
            if(!data || data === null || data === undefined) return message.reply(`Kullanıcı adını lütfen @ olmadan sadece isim olarak giriniz.`)
            if(data.isBusinessAccount === false) {ishesabi = "Hayır"} else {ishesabi = "Evet"};
            if(data.isPrivate === false) { gizlihesap = "Hayır"} else {gizlihesap = "Evet"};
            if(data.isVerified === false) {onaylihesap = "Hayır"} else {onaylihesap = "Evet"};
            
            const embed = new Discord.MessageEmbed()
            .setTitle(`İstediğiniz kullanıcının hesap bilgileri`)
            .setThumbnail(`${data.profilePicHD}`)
            .addFields(
                {name: "İsim", value: `${data.fullName}`, inline: false},
                {name: "Profil Bağlantısı", value: `[Instagram](${data.link})`, inline: false},
                {name: "Biografi", value: `${data.biography}`, inline: false},
                {name: "Takip Ettiği Kişi Sayısı", value: `\`${data.subscribtions}\``, inline: true},
                {name: "Takip Eden Kişi Sayısı", value: `\`${data.subscribersCount}\``, inline: true},
                {name: "Kullanıcı Etiketi", value: `@${data.username}`, inline: false},
                {name: "İş hesabı mı?", value: `${ishesabi}`, inline: true},
                {name: "Gizli hesap mı?", value: `${gizlihesap}`, inline: true},
                {name: "Onaylı hesap mı?", value: `${onaylihesap}`, inline: true},
                {name: "Gönderi Sayısı", value: `\`${data.postsCount}\``, inline: false}
            )
            message.channel.send(embed)
        })
        
}
}
