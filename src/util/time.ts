export class Time {
    HMformat() {
        //future me can solve this i hope
        const time = this.getTime();
        return `${time.getHours()}:${time.getMinutes()}`;
    }

    getTime(offset = 5.5) {
        const date = new Date();
        const utc = date.getTime() + date.getTimezoneOffset() * 60000;
        return new Date(utc + 3600000 * offset);
    }
}
export default new Time();
