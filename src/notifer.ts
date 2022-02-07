import { Time } from "./util/time";

class Notifer extends Time {
    intervalId: NodeJS.Timer;
    start() {
        this.intervalId = setInterval(this.interval.bind(this), 1e3);
    }
    stop() {
        clearInterval(this.intervalId);
    }

    interval() {
        console.log(this.HMformat());
    }
}

export default new Notifer();
