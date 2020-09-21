const mongoose = require('mongoose');

const config = new mongoose.Schema({

    guildID: String,
    userID: String,
    Kicks: Array

});

module.exports = mongoose.model('kicks', config)
