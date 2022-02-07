export class Time {
    HMformat(date?: Date) {
        if (date) return `${date.getHours() % 12}:${date.getMinutes()}`;
        const time = this.getTime();
        return `${time.getHours() % 12}:${time.getMinutes()}`;
    }

    getTime(offset = 5.5) {
        const date = new Date();
        const utc = date.getTime() + date.getTimezoneOffset() * 60000;
        return new Date(utc + 3600000 * offset);
    }
}
export default new Time();
