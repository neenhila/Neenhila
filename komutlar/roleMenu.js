const disbut = require("discord-buttons");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: "roleMenu",
    usage: "rolemenu",
    description: "Rolleri menü üzerinden almanızı sağlar.",
    execute(message){
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
                .setPlaceholder("Tıkla ve rolünü al! / Click and get a role!")
        
                message.channel.send("Bir seçenek seç. / Choose an option.", menu)
        
            }
}
