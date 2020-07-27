const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

//here we first setup our express server using app.use. Later we will
//use it as parameter in http.createserver function
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Wlcome to Express Server</h1></body><html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`);
})