module.exports = {
    name: "help",
    usage: "help",
    cooldown: 50,
    description: "Yardım menüsünü açar.",
    async execute(message, client, Discord, disbut) {
        if (message.author.bot) return;
        
        message.channel.send(`Data loading...`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn1 = new disbut.MessageButton()
            .setLabel('Bot Hakkında')
            .setID('1').setStyle('blurple').setEmoji("869707733509746718")
        const btn2 = new disbut.MessageButton()
            .setLabel('Komutlar')
            .setID('2').setStyle('blurple').setEmoji("869707733685927936")
        const btn3 = new disbut.MessageButton()
            .setLabel('Bot İstatistikleri')
            .setID('3').setStyle('blurple').setEmoji("869708003404808203")
        const btn4 = new disbut.MessageButton()
            .setLabel('Github')
            .setStyle('url').setURL(`https://github.com/alejandro1x/Neenhila`).setEmoji(`869323290341154828`)
        const btn5 = new disbut.MessageButton()
            .setLabel('Botu sunucunuza davet edin!')
            .setEmoji(`869323775370465370`).setStyle('url').setURL(`https://discord.com/oauth2/authorize?client_id=868493541242974230&scope=bot&permissions=8589934591`)
        
        const btn6 = new disbut.MessageButton()
        .setLabel(`Geliştirici Bilgileri`)
        .setEmoji("770004633984303121")
        .setStyle(`blurple`)
        .setID("6")


        const row = new disbut.MessageActionRow()
            .addComponent(btn1)
            .addComponent(btn2)
            .addComponent(btn3)
            .addComponent(btn6);
        const row2 = new disbut.MessageActionRow()
            .addComponent(btn4)
            .addComponent(btn5);

        const hakkında = new Discord.MessageEmbed()
            .setTitle('Bot Hakkında')
            .setDescription(`Merhaba, ben Neenhila. (Evet, bota kendi ismimi verdim. :d) Bu botu 2 aylık kod deneyimimle yazdım. Kodları yazarken Stackoverflow sitesi haricinde bir site kullandığımı hatıırlamıyorum. Genellikle deneyip, yanlışlarımı düzelterek öğrenmeyi daha güzel bulduğum için böyle uğraştım. Bu bottan önce tam 29 tane private bot yaptım. Ayrıca 4 farklı public sunucuya da ücret karşılığı bot yaptım fakat hiçbirinden istediğim geridönüşü alamadım çünkü botlarım yeterli değildi.\n\n   Fakat bu sefer, elimden geldiğince temiz bir bot yapmaya çalışıyorum ve bunu da açık kaynak olarak sizlerle paylaşarak yapıyorum. Bu sayede yeni başlayan ve öğrenme sürecini başka türlü algılayan arkadaşlar da bu şekilde rahatlıkla öğrenebilir.\n\n >>> Bu hesap hatırladığım kadarıyla 20-21 Temmuz 2021 gibi oluşturuldu. Hep birlikte gelişimini takip edebiliriz. Github linkine aşağıdaki butondan tıklayarak ulaşabilirsiniz. README dosyasına günlük eklemeler yapıyorum! Yıldız atmayı unutmayın <3  `)
            .setImage(`https://i.ibb.co/zZDRLzg/802825.jpg`)
        const embed1 = new Discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `<a:AyarGif:869301910853795921> prefix`, value: `>>> Botun sunucunuzdaki prefixinizi ayarlamak için kullanılır. Örnek: **!prefix &** _(Artık prefixiniz & olur.)_`, inline: false},
                {name: `<a:AyarGif:869301910853795921> welcome`, value:`>>> Sunucunuza katılan kişilere hoşgeldin mesajı atacağı kanalı ayarlar. Örnek: **!welcome #hosgeldin-kanalı** _(etiketlemeniz gerekir)_`, inline: false},
                {name: `<a:AyarGif:869301910853795921> goodbye`, value:`>>> Sunucunuzdan ayrılan kişilerin mesajını atacağı kanalı ayarlar. Örnek: **!goodbye #ayrılanlar-kanalı** _(etiketlemeniz gerekir)_`, inline: false},
                {name: `<a:AyarGif:869301910853795921> ping`, value:`>>> Botun ve API iletişiminin pingini gösterir. Örnek: **!ping**`, inline: false},
                {name: `<a:AyarGif:869301910853795921> stats`, value:`>>> Botun istatistiklerini içeren mesaj atar. Örnek: **!stats**`, inline: false}
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let embed2 = new Discord.MessageEmbed()
            .setAuthor(`Bot İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Merhaba, bu bot tarafımca (Neenhila#0666) hazırlanan ilk public botudur. Elbette eksileri olacaktır. Bunları bana bildirmekten çekinmeyin. Bota __**!öneri boşluk mesajınızı**__ yazarak bana iletebilirsiniz.\n\n`)
            .setThumbnail(client.user.displayAvatarURL({dynmaic: true}))
            .addFields(
                {name: "<a:RainbowOkGif:869301898946158763> Bot Pingi", value:`  >>> \`${botPing}\` **ms**`, inline: true},
            
                {name: "<a:RainbowOkGif:869301898946158763> Discord API Pingi", value:`  >>>  \`${client.ws.ping}\` **ms**`, inline: true},

                {name: "<a:SabitGif:869301913089355857> Bot kaç sunucuda aktif?", value:`>>> \`${client.guilds.cache.size}\` **guild(s)**`, inline: false},

                {name: "<a:SabitGif:869301913089355857> Bot ne zamandan beri aktif?", value: `>>> **\`${days}\` gün \`${hours}\` saat \`${minutes}\` dakika \`${seconds}\` saniyedir aktif!**`, inline: false}
            )
            .setFooter(`${message.author.tag} tarafından istendi!`, message.author.displayAvatarURL({dynmaic: true}))
            .setTimestamp()
            let user = client.users.cache.get("849811561315827722");
            if(user.presence.status === "online"){
                durum = "Şu anda online! Mesaj atabilirsin!"
                emoj = "<:online:869708806303666236>"
            } else if (user.presence.status === "dnd"){
                durum = "Lütfen rahatsız etmeyin."
                emoj = "<:dnd:869708806265917501>"
            } else if(user.presence.status === "offline"){
                durum = "Şu anda çevrimdışı. Mesajınızı bırakabilirsiniz."
                emoj = "<:offline:869708806249152552>"
            } else if(user.presence.status === "idle"){
                durum = "Boş boş geziyor. Hızlı cevap almanız yüksek ihtimal... :D"
                emoj = "<:idle:869708806324649984>"
            }
            let embed3 = new Discord.MessageEmbed()
            .setAuthor(`Geliştirici Bilgileri`, client.user.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            .addFields(
                {name: `>>> Bot Geliştiricisi:`, value:`<a:developer:869703545614630943> ${user.tag}`, inline: false},
                {name: ">>> Durum:", value:`${emoj} ${durum}`, inline: false},
                {name: "> Linkler", value: "[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=868493541242974230&scope=bot&permissions=8589934591) | [Destek Sunucusu](https://discord.gg/ZvAygZGwPJ) | [Github](https://github.com/alejandro1x/Neenhila)"}
            )
            .setFooter(`Neenhila Discord Botu`, user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
        let msg = await message.channel.send({ embed: hakkında, components: [row, row2] })


        const filter = (button) => button.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createButtonCollector(filter, { time: 30000 });
        client.on("clickButton", btn => {
            btn.reply.defer();
            if (btn.id === '1') {
                msg.edit({
                    embed: hakkında,
                    components: [row, row2]
                })
            }
            if (btn.id === '2') {
                msg.edit({
                    embed: embed1,
                    components: [row, row2]
                })
            }
            if (btn.id === '3') {
                msg.edit({
                    embed: embed2,
                    components: [row, row2]
                })
            }
            if(btn.id === '6'){
                msg.edit({
                    embed: embed3,
                    components: [row, row2]
                })
            }
        })


    
        })
    }
}
