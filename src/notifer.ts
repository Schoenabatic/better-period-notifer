import { AnyChannel, Client, TextChannel } from 'discord.js'
import { StateInterface } from './types'
import { getState } from './util/json'
import { Time } from './util/time'

class Notifer extends Time {
    intervalId: NodeJS.Timer
    state: StateInterface
    channel?: AnyChannel
    client: Client
    init(client: Client) {
        this.client = client
    }
    start() {
        this.state = getState()
        this.channel = this.client.channels.cache.get(this.state.CHANNEL_ID)
        this.intervalId = setInterval(this.interval.bind(this), 60e3)
    }
    stop() {
        clearInterval(this.intervalId)
    }

    interval() {
        const [time, AMPM] = this.HMformat()
        const timeDate = this.getTime()
        const hours = timeDate.getHours()
        console.log(time, AMPM)
        if (timeDate.getDay() === 0 || timeDate.getDay() === 6)
            return console.log('ITS WEEKEND I THINk')
        if (!(hours >= 8 && hours <= 15)) return console.log('DONE FOR THE DAY')
        const periods = this.state.timetable[time]
        if (!periods) return
        if (periods.length === 1) {
            return this.send(periods[0])
        }
        return this.send(periods[this.getTime().getDay() - 1])
    }

    send(period: string) {
        ;(this.channel as TextChannel).send({
            embeds: [
                {
                    description: `Day: \`${this.getDay()}\`\nClass: \`${period}\``,
                    footer: {
                        text: `good day to you <@549244932213309442>`
                    }
                }
            ]
        })
    }

    getNextClass() {
        // const currentTime = this.getTime()
        //eeh ill do it later
        //i dont feel like doing it
    }
}

export default new Notifer()
