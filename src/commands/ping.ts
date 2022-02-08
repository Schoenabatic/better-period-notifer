import { Command } from '../types'

export const Ping: Command = {
    name: 'ping',
    description: 'Replies with Pong!',
    execute: async interaction => {
        await interaction.reply('Pong!')
    }
}
