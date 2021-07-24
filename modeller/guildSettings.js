const mongoose = require("mongoose");


const guildSettings = mongoose.Schema({
    id: String,
    prefix: String,
    welcomeCh: String
})

module.exports = mongoose.model("guilds", guildSettings)