import { Command } from '../types'
import { toggle } from '../util/toggleNotifer'

export const Toggle: Command = {
    name: 'toggle',
    description: 'toggles the notifer',
    execute: async interaction => {
        const hehe = toggle(interaction.client)
        interaction.reply(`enabled: \`${hehe}\``)
    }
}
