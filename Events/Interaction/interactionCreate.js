const { Client, CommandsInteraction, MessageEmbed } = require('discord.js')



module.exports = {
    name: 'interationCreate',
  /**
   * 
   * @param { CommandInteraction } interaction
   * @param {Client} client
   */  
    async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command  = client.commands.get(interaction.commandName)
            if(!commands) return interaction.replu({embeds: [
                new MessageEmbed()
                .setColor('RED')
                .setDescription('<:wr960:902158805406728212> произошла ошибка при выполнении этой команды')
            ]}) && client.commands.delete(interaction.commandName);


            commands.execute(interaction, client)

        }
    }
}