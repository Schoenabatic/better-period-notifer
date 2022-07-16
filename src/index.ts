import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { Client, Intents, MessageActionRow, MessageButton } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

import commands from './commands'
import { getStatusEmbed } from './commands/status'
import { CLIENT_ID } from './constants'
import notifer from './notifer'
import { getState } from './util/json'
import { keepAlive } from './util/keepalive'
import { toggle } from './util/toggleNotifer'

// const client = new Client({
//     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
// })

// const rest = new REST({ version: '9' }).setToken(process.env.token!)

// const main = async () => {
//     const state = getState()
//     await rest.put(Routes.applicationGuildCommands(CLIENT_ID, state.GUILD_ID), {
//         body: commands
//     })
//     const commandNames = commands.map(s => s.name)
//     client.on('ready', () => {
//         console.log(`Logged in as ${client.user!.tag}!`)
//         notifer.init(client)
//         if (state.enabled) notifer.start()
//     })

//     client.on('interactionCreate', async interaction => {
//         if (interaction.isCommand()) {
//             const index = commandNames.indexOf(interaction.commandName)
//             if (index != -1) {
//                 commands[index].execute(interaction)
//             }
//         }
//         if (interaction.isButton()) {
//             switch (interaction.customId) {
//                 case 'toggle':
//                     const enabled = toggle()
//                     const row = new MessageActionRow().addComponents(
//                         new MessageButton()
//                             .setCustomId('toggle')
//                             .setLabel(enabled ? 'Disable' : 'Enable')
//                             .setStyle(enabled ? 'DANGER' : 'SUCCESS')
//                     )
//                     interaction.update({
//                         embeds: getStatusEmbed(client),
//                         components: [row]
//                     })
//                     break
            }
        }
    })
    keepAlive()
    client.login(process.env.token!)
}

main().catch(err => console.error(err))
