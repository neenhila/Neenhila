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
                welcomeCh: undefined,
                goodbyeCh: undefined
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

client.on("clickMenu", async menu => {
                        await menu.clicker.fetch();
                        if(menu.clicker.id !== message.author.id) return menu.clicker.user.send("Lütfen kendiniz !rolemenu kullanarak menüyü kullanın. Başkalarının menüsünü meşgul etmeyin. / Please use your !rolemenu menu. Don't use others menu, bot's going busy.")
                        await menu.reply.think(true)
                        if(menu.values[0] === "rol1"){
                            if(menu.clicker.member.roles.cache.has("868966251253342269")){
                                menu.clicker.member.roles.remove(`868966251253342269`)
                                menu.reply.edit(`Başarıyla <@&868966251253342269> rolünü üzerinizden aldım. / I took <@&868966251253342269> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966251253342269")
                            menu.reply.edit(`Başarıyla <@&868966251253342269> rolünü aldınız. / I gave you <@&868966251253342269> role.`)
                            }
                        } else if(menu.values[0] === "rol2"){
                            if(menu.clicker.member.roles.cache.has("868966260401127494")){
                                menu.clicker.member.roles.remove(`868966260401127494`)
                                menu.reply.edit(`Başarıyla <@&868966260401127494> rolünü üzerinizden aldım. / I took <@&868966260401127494> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966260401127494")
                            menu.reply.edit(`Başarıyla <@&868966260401127494> rolünü aldınız. / I gave you <@&868966260401127494> role.`)
                            }
                        } else if(menu.values[0] === "rol3"){
                            if(menu.clicker.member.roles.cache.has("868966260908625930")){
                                menu.clicker.member.roles.remove(`868966260908625930`)
                                menu.reply.edit(`Başarıyla <@&868966260908625930> rolünü üzerinizden aldım. / I took <@&868966260908625930> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966260908625930")
                            menu.reply.edit(`Başarıyla <@&868966260908625930> rolünü aldınız. / I gave you <@&868966260908625930> role.`)
                            }
                        }else if(menu.values[0] === "rol4"){
                            if(menu.clicker.member.roles.cache.has("868966261604909056")){
                                menu.clicker.member.roles.remove(`868966261604909056`)
                                menu.reply.edit(`Başarıyla <@&868966261604909056> rolünü üzerinizden aldım. / I took <@&868966261604909056> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966261604909056")
                            menu.reply.edit(`Başarıyla <@&868966261604909056> rolünü aldınız. / I gave you <@&868966261604909056> role.`)
                            }
                        }
                    })
