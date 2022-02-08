import { AnyChannel, Client, TextChannel } from 'discord.js'
import { StateInterface } from './types'
import { getState } from './util/json'
import { Time } from './util/time'

class Notifer extends Time {
    intervalId: NodeJS.Timer
    state: StateInterface
    channel?: AnyChannel
    start(client: Client) {
        this.state = getState()
        this.channel = client.channels.cache.get('773024516200595496')
        this.intervalId = setInterval(this.interval.bind(this), 60e3)
    }
    stop() {
        clearInterval(this.intervalId)
    }

    interval() {
        const [time, AMPM] = this.HMformat()
        console.log(time, AMPM)
        // if its past 3 o clock in the afternoon RETURN otherwise when it hits 8 40pm at night it will trigger the notifer eh
        if (parseInt(time.split(':')[0]) > 3 && AMPM === 'PM') return
        const periods = this.state.timetable[time]
        if (!periods) return
        if (periods.length === 1) {
            return this.send(periods[0])
        }
        return this.send(periods[this.getTime().getDay() - 1])
    }

    send(period: string) {
        ;(this.channel as TextChannel).send(period)
    }
}

export default new Notifer()
