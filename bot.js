const Discord = require("discord.js");
const client = new Discord.Client();
const MessageEmbed = require("discord.js");
const disbut = require("discord-buttons");
const guildSettings = require("./modeller/guildSettings.js")
const { MessageMenuOption, MessageMenu, MessageActionRow, MessageButton } = require('discord-buttons');
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"));
client.events = new Discord.Collection();
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const mongoose = require("mongoose");
mongoose.connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

disbut(client);

client.login(process.env.TOKEN);

client.on("ready", () => {
     client.user.setActivity(`${client.guilds.cache.size} sunucuda hizmet vermekte!`, {type: "PLAYING"});
     console.log(`${client.guilds.cache.size} sunucuda aktif.`)
}
)

async function getGuild(id){
    try{
        data = await guildSettings.findOne({
            id: id,
        })
        if(!data){
            data = new guildSettings({
                id: id,
                prefix: "!",
                welcomeCh: undefined
            })
            data.save();
        }
        if(data){
            if(!data.prefix){
                data.prefix = "!";
                data.save();
            }
        }
    } catch(e){
        console.log(e)
    }
return data;

}   


fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const once = eventFunction.once;
        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.execute(...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});


for (const file of commandFiles) {
    const command = require(`./komutlar/${file}`)
    client.commands.set(command.usage, command);
}




client.on("message", async message => {
    await getGuild(message.guild.id).then(() => {
        if (!message.content.startsWith(data.prefix) || message.author.bot) return;
        const args = message.content.slice(data.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === "add" && message.member.hasPermission("ADMINISTRATOR")){
            client.emit("guildMemberAdd", message.member)
        }
        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).execute(message);
        } catch (error) {
            console.log(`Komutu uygularken bir hata ile karşılaştım. Komut: ${command}`)
            console.log(error)
        }
    })
    
    
    
})

