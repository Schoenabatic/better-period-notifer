import { ApplicationCommandData, CommandInteraction } from 'discord.js'

export type Command = ApplicationCommandData & {
    execute: (interaction: CommandInteraction) => Promise<any>
}
export interface StateInterface {
    enabled: boolean
    timetable: {
        [key: string]: string[]
    }
}
