const { Client } = require('discord.js');
const mongoose = require('mongoose')
const { Database } = require('../../config.json');

module.exports = {
    name: 'ready',
    once: true,
    /**
 * @param { Client } client
 */
    execute(client) {
        console.log('Клиент готов к работе!');
        client.user.setActivity('за сервером', {type: 'WATCHING'});

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('К клиенту был подключен база данных MongoDB✅')

        }).catch((err) => {
            console.log(err)
        })

        
        
    }
}