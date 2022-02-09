import notifer from '../notifer'
import { setState } from './json'

export const toggle = () => {
    const state = setState(state => ({ ...state, enabled: !state.enabled }))
    state.enabled ? notifer.start() : notifer.stop()
    return state.enabled
}
