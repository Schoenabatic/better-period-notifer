import { Command } from '../types'

export const Timetable: Command = {
    name: 'timetable',
    description: 'sends the timetable :|',
    execute: async interaction => {
        await interaction.reply(
            'https://media.discordapp.net/attachments/756761009729044540/941505967063973888/TT.png'
        )
    }
}
