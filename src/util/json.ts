import fs from 'fs'
import { STATE_FILE_PATH } from '../constants'
import { StateInterface } from '../types'

export const write = (json: StateInterface) => {
    fs.writeFileSync(STATE_FILE_PATH, JSON.stringify(json, null, 2))
}
export const getState = (): StateInterface => {
    const data = fs.readFileSync(STATE_FILE_PATH, 'utf-8')
    return JSON.parse(data)
}

export const setState = (
    cb: (state: StateInterface) => StateInterface
): StateInterface => {
    const newState = cb(getState())
    write(newState)
    return newState
}
