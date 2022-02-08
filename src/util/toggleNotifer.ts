import { Client } from 'discord.js'
import notifer from '../notifer'
import { setState } from './json'

export const toggle = (client: Client) => {
    const state = setState(state => ({ ...state, enabled: !state.enabled }))
    state.enabled ? notifer.start(client) : notifer.stop()
    return state.enabled
}
