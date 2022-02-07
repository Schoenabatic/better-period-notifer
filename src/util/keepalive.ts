import http from "http";

var server = http.createServer((_, res) => {
    res.end("test");
});

server.on("listening", function () {
    console.log("ok, server is running");
});

export function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is online!");
    });
}
