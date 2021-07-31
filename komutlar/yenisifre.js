module.exports = {
    name: "passwordGenerator",
    usage: "yenisifre",
    description: "Size bir şifre üretir. Bu şifreyi yalnızca siz görebilirsiniz.",
    cooldown: 300,
    execute(message){
        if(message.author.bot) return;
            var randomChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-/+,%&![{}]()`;
            var pwLen = 9;
            var randPw = Array(pwLen).fill(randomChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
if(message.guild) {
            message.author.send(`Yeni şifreniz: \` ${randPw} \` `)
            message.channel.send(`Şifreniz DM kutunuza gönderilmiştir. Son derece güçlü ve güvenilir bir şifredir. Şifreniz kurucularım dahil hiçkimse ile paylaşılmamaktadır!`)
} else {
    message.channel.send(`Yeni şifreniz: \` ${randPw} \` `);
        }
    }
