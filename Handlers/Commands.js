const { Perms } = require('../Validation/Permissions');
const { Client } = require('discord.js');
const { promisify } = require("util");
const { glob } = require('glob');
const Ascii = require('ascii-table');
const PG = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    const Table = new Ascii('Команда загружена✅');
    
    CommandsArray = [];

    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if(!command.name)
        return Table.addRow(file.split("/")[7], "🛑FAILED", "Отсутствует имя");

        if(!command.description) 
        return Table.addRow(command.name, "🛑FAILED", "Отсутствует описание");

        if(command.permission) {
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else
            return Table.addRow(command.name, "🛑FAILED", "Права недействительно");
        }

        client.commands.set(command.name, comand);
        CommandsArray.push(command);
        
        await Table.addRow(command.name, "🔹 УСПШЕНО!")
    });

    console.log(Table.toString());

    client.on('ready', async () => {
        const MainGuid = await guilds.cache.get('899608830059634708');

        MainGuid.commands.set(CommandsArray).then(async (command) => {
            const Roles = (commandName) => {
                const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;

            };

            const fullPermissions = commands.reduce((accumulator,r) => {
                const roles = Roles(r.name);
                if(!roles) return accumulator;

                const Permissions = roles.reduce((a,r) => {
                    return [...a, {id: r.id, type: "ROLE", permission: true}]
                }, []);

                return [...accumulator, {id: r.id, permissions }]
            }, []);

            await MainGuid.commands.permissions.set({ fullPermissions });

        });
    });
} ;