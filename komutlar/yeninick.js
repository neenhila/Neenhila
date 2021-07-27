module.exports = {
    name: "nickname Generator",
    usage: "yeninick",
    description: "Verdiğiniz kelimeden size bir nickname üretir!",
    cooldown: 60,
    execute(message){
        if(message.author.bot) return;
            var randomWords = `aaaaaabcdeeeeeefghiiiiiiijklmnooooooopqrstuuuuuuvwxyz`;
            var nickLen = 8;
            var randNick = Array(nickLen).fill(randomWords).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
            nickname = randNick.charAt(0).toUpperCase() + randNick.substring(1);
            message.channel.send(`Yeni nickin: \` ${nickname} \``)
        }
    }