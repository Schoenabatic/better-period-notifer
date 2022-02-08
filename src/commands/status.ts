import { Client, MessageActionRow, MessageButton } from 'discord.js'
import { Command, StateInterface } from '../types'
import { getState } from '../util/json'

export const Status: Command = {
    name: 'status',
    description:
        'sends the status like if its running and wot channel its running on',
    execute: async interaction => {
        const state = getState()
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('toggle')
                .setLabel(state.enabled ? 'Disable' : 'Enable')
                .setStyle(state.enabled ? 'DANGER' : 'SUCCESS')
        )
        await interaction.reply({
            embeds: getStatusEmbed(interaction.client, state),
            components: [row]
        })
    }
}

export const getStatusEmbed = (
    client: Client,
    state: StateInterface = getState()
) => {
    const guild = client.guilds.cache.get(state.GUILD_ID)!
    return [
        {
            title: 'Status',
            description: `(\`🚀\`) Enabled: \`${state.enabled}\`\n(\`🚟\`) Guild ID: \`${guild.id}\` (${guild.name})\n(\`🚟\`) Channel ID: \`${state.CHANNEL_ID}\` <#${state.CHANNEL_ID}>\n`,
            footer: {
                text: 'how was your day'
            }
        }
    ]
}
