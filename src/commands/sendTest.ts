import { Command } from '../types'
import notifer from '../notifer'
import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums'
export const Send: Command = {
    name: 'send',
    description: 'send a test of the notifactiont thingy',
    options: [
        {
            name: 'text',
            description: 'anything ong',
            type: ApplicationCommandOptionTypes.STRING,
            required: true
        }
    ],
    execute: async interaction => {
        const opt = interaction.options.get('text')
        console.log(opt)
        notifer.send((opt?.value as string | null) ?? 'bru')
    }
}
