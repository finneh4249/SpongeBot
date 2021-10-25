const { CommandInteraction } = require('discord.js')

module.exports = {
    name : 'ping', 
    permissions: 'ADMINISTRATOR',
    /**
     * 
     * @param { CommandInteraction } interaction
     */
    execute(interaction) {
        interaction.reply({content: 'POING'})
    }
}