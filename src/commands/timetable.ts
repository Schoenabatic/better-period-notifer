import { Command } from '../types'

export const Timetable: Command = {
    name: 'timetable',
    description: 'sends the timetable :|',
    execute: async interaction => {
        await interaction.reply(
            'https://cdn.discordapp.com/attachments/756761009729044540/940394532309188668/3qwl6HFH9E4GyeQ83MD4TgAKNp9bmMeE_WZRFevoQlKBYUWb2mfD2Ux78Qr_QepjhSqlNyVtTPE1d_ww1902-h969.png'
        )
    }
}
