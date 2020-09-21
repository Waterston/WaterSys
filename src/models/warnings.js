const mongoose = require('mongoose');

const config = new mongoose.Schema({

    guildID: String,
    userID: String,
    Warns: Array

});

module.exports = mongoose.model('warnings', config)
