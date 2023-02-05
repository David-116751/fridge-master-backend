import { createServer, IncomingMessage, ServerResponse } from 'http';
import express from 'express';
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

const port = 4201;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.on('error', (err) => {
        console.error(err);
    });
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello world!');
});

server.listen(port);
