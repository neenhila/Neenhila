const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"));
client.events = new Discord.Collection();
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));


module.exports = {
        name: "ready",
        once: true,
        description: "Bot çalışmaya başladığında yapılacaktır.",
        execute(client) {
            console.log(`--------------Komutlar----------------`)
            commandFiles.forEach(x => {
                        console.log(`${x.split(`.js`)} komutu başarıyla yüklendi.`)
        })
        
            console.log(`--------------Eventler----------------`)
            eventFiles.forEach(x => {
            console.log(`${x.split(`.js`)} eventi başarıyla hazırlandı.`)
        })

        
        console.log(`Bot ${commandFiles.length} komutu ve ${eventFiles.length} eventi ile hizmete hazır. `)

    
},
}
