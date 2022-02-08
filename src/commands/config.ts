import { Command } from '../types'
import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums'
import { setState } from '../util/json'

export const Config: Command = {
    name: 'config',
    description: 'change which channel it sends to OR change guild :P',
    options: [
        {
            name: 'channel',
            description: 'select which channel you want the message to be in',
            type: ApplicationCommandOptionTypes.CHANNEL,
            required: false
        },
        {
            name: 'server',
            description: 'change the server you want the bot to be running in',
            type: ApplicationCommandOptionTypes.STRING,
            required: false
        }
    ],
    //why is this so garbage
    execute: async interaction => {
        const data = interaction.options.data
        if (data.length) {
            data.forEach(async item => {
                switch (item.name) {
                    case 'channel':
                        const state = setState(state => ({
                            ...state,
                            CHANNEL_ID: item.value!.toString()
                        }))
                        return await interaction.reply(
                            `new channel is now <#${state.CHANNEL_ID}>`
                        )
                    case 'server':
                        const guild = interaction.client.guilds.cache.get(
                            item.value!.toString()
                        )
                        if (!guild) {
                            return await interaction.reply(
                                'i cant see that server 😔 pls add me to it'
                            )
                        }
                        setState(state => ({ ...state, GUILD_ID: guild.id }))
                        return await interaction.reply(
                            `new server is now ${guild.name} (${guild.id})`
                        )
                }
            })
        }
        console.log(interaction)
    }
}
