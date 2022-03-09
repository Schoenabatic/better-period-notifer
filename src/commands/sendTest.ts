import { Command } from '../types'
import notifer from '../notifer'
import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums'
export const Ping: Command = {
    name: 'ping',
    description: 'Replies with Pong!',
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
