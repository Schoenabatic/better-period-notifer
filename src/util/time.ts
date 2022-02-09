export class Time {
    HMformat(date?: Date) {
        if (date)
            return date
                .toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
                .split(' ')
        const time = this.getTime()
        return time
            .toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
            .split(' ')
    }

    getDay() {
        return this.getTime().toLocaleString('en-us', { weekday: 'long' })
    }

    getTime(offset = 5.5) {
        const date = new Date()
        const utc = date.getTime() + date.getTimezoneOffset() * 60000
        return new Date(utc + 3600000 * offset)
    }
}
export default new Time()
