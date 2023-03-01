"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const httpServer = (0, http_1.createServer)();
const io = new socket_io_1.Server(httpServer, {});
io.on('connection', (socket) => {
    socket.on('message', (e) => {
        console.log(e);
        io.emit('message', e);
    });
});
httpServer.listen(5000, () => {
    console.log('Done listening');
});
