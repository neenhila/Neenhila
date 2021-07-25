module.exports = {
    name: "roleMenu",
    usage: "rolemenu",
    description: "Rolleri menü üzerinden almanızı sağlar.",
    execute(message){
                if(message.guild.id !== "868618227310280744") return;
                if(message.author.bot) return;
        
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
        
                message.channel.send("Bir seçenek seç. / Choose an option.", menu).then(msg => {
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
                })
        
            }
}
