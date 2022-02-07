class Notifer {
    intervalId: NodeJS.Timer;
    start() {
        this.intervalId = setInterval(() => {
            console.log("RUNNING");
        }, 1e3);
    }
    stop() {
        clearInterval(this.intervalId);
    }
}

export default new Notifer();
