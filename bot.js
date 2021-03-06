const Discord = require("discord.js");
const client = new Discord.Client();
const MessageEmbed = require("discord.js");
const disbut = require("discord-buttons");
const guildSettings = require("./modeller/guildSettings.js")
const { MessageMenuOption, MessageMenu, MessageActionRow, MessageButton } = require('discord-buttons');
const fs = require("fs");
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
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
                prefix: "n!",
                welcomeCh: undefined,
                goodbyeCh: undefined
            })
            data.save();
        }
        if(data){
            if(!data.prefix){
                data.prefix = "n!";
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
    if(!message.guild) 
{ g1 = "868618227310280744"}
 else if(message.guild){ g1 = message.guild.id };
    await getGuild(g1).then(() => {
        if (!message.content.startsWith(data.prefix) || message.author.bot) return;
        const args = message.content.slice(data.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (!client.commands.has(command)) return;
        if(!cooldowns.has(command)){
            cooldowns.set(command, new Discord.Collection())
        }
        const f = require(`./komutlar/${command}.js`)
        const now = Date.now();
        const timestamps = cooldowns.get(command);
        if(!f.cooldown){cd = 5} else {cd = f.cooldown}
        
        const cooldownAmount = (cd) * 1000;

        if(timestamps.has(message.author.id)){
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if(now < expirationTime){
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`Komutu yeniden kullanabilmek i??in beklemeniz gereken s??re \`${timeLeft}\` saniyedir.`)
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        if(command === "add" && message.author.id === "849811561315827722"){
            client.emit("guildMemberAdd", message.member)
        } else {
            try {
                if(command === "ping"){
                    client.commands.get("ping").execute(message, client, Discord);
                } else if(command === "stats"){
                    client.commands.get("stats").execute(message, client, Discord);
                } else if (command === "help") {
                    client.commands.get("help").execute(message, client, Discord, disbut);
                } else {
                client.commands.get(command).execute(message);
                }
            } catch (error) {
                console.log(`Komutu uygularken bir hata ile kar????la??t??m. Komut: ${command}`)
                console.log(error)
            }
        }     
    })});


client.on("message", async message => {
    if(!message.guild) return;
    await getGuild(message.guild.id).then(() => {
  if (message.content.startsWith(data.prefix + "eval")) {
      const args = message.content.split(" ").slice(1);
      if(message.author.id !== "849811561315827722") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
  } else if(message.content.toLowerCase() === (`${data.prefix}rolemenu`)){
if(message.guild.id !== "868618227310280744") return;
                if(message.author.bot) return;
                message.delete({timeout:3000});
        
                let menuOption1 = new disbut.MessageMenuOption()
                .setValue("rol1")
                .setLabel("> Support")
                
                let menuOption2 = new disbut.MessageMenuOption()
                .setValue("rol2")
                .setLabel("> Chatting")
        
                let menuOption3 = new disbut.MessageMenuOption()
                .setValue("rol3")
                .setLabel("> Learning")
        
                let menuOption4 = new disbut.MessageMenuOption()
                .setValue("rol4")
                .setLabel("> Fun")
        
                let menu = new disbut.MessageMenu()
                .addOptions(menuOption1, menuOption2, menuOption3, menuOption4)
                .setMinValues(1)
                .setMaxValues(1)
                .setID("menu")
                .setPlaceholder("T??kla ve rol??n?? al! / Click and get a role!")
        
                message.channel.send("Bir se??enek se??. / Choose an option.", menu).then(msg => {
                    msg.delete({timeout: 35000 });
                    client.on("clickMenu", async menu => {
                        await menu.clicker.fetch();
                        if(menu.clicker.id !== message.author.id) return menu.clicker.user.send("L??tfen kendiniz !rolemenu kullanarak men??y?? kullan??n. Ba??kalar??n??n men??s??n?? me??gul etmeyin. / Please use your !rolemenu menu. Don't use others menu, bot's going busy.")
                        await menu.reply.think(true)
                        if(menu.values[0] === "rol1"){
                            if(menu.clicker.member.roles.cache.has("868966251253342269")){
                                menu.clicker.member.roles.remove(`868966251253342269`)
                                menu.reply.edit(`Ba??ar??yla <@&868966251253342269> rol??n?? ??zerinizden ald??m. / I took <@&868966251253342269> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966251253342269")
                            menu.reply.edit(`Ba??ar??yla <@&868966251253342269> rol??n?? ald??n??z. / I gave you <@&868966251253342269> role.`)
                            }
                        } else if(menu.values[0] === "rol2"){
                            if(menu.clicker.member.roles.cache.has("868966260401127494")){
                                menu.clicker.member.roles.remove(`868966260401127494`)
                                menu.reply.edit(`Ba??ar??yla <@&868966260401127494> rol??n?? ??zerinizden ald??m. / I took <@&868966260401127494> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966260401127494")
                            menu.reply.edit(`Ba??ar??yla <@&868966260401127494> rol??n?? ald??n??z. / I gave you <@&868966260401127494> role.`)
                            }
                        } else if(menu.values[0] === "rol3"){
                            if(menu.clicker.member.roles.cache.has("868966260908625930")){
                                menu.clicker.member.roles.remove(`868966260908625930`)
                                menu.reply.edit(`Ba??ar??yla <@&868966260908625930> rol??n?? ??zerinizden ald??m. / I took <@&868966260908625930> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966260908625930")
                            menu.reply.edit(`Ba??ar??yla <@&868966260908625930> rol??n?? ald??n??z. / I gave you <@&868966260908625930> role.`)
                            }
                        }else if(menu.values[0] === "rol4"){
                            if(menu.clicker.member.roles.cache.has("868966261604909056")){
                                menu.clicker.member.roles.remove(`868966261604909056`)
                                menu.reply.edit(`Ba??ar??yla <@&868966261604909056> rol??n?? ??zerinizden ald??m. / I took <@&868966261604909056> role from you.`)
                            } else {
                            menu.clicker.member.roles.add("868966261604909056")
                            menu.reply.edit(`Ba??ar??yla <@&868966261604909056> rol??n?? ald??n??z. / I gave you <@&868966261604909056> role.`)
                            }
                        }
                    })

                })
}
     })
})
