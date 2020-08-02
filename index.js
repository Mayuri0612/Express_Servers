const express = require('express');
const http = require('http'); //important step 1
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); //middleware used like this
app.use(bodyParser.json()); //middlewares used like this
app.use('/dishes', dishRouter);

//API section using Express

/*
app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send details of the dish: ' + 
        req.params.dishID + ' to you!!');
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + 
        req.params.dishID);
});

app.put('/dishes/:dishId', (req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n'); // write to reply messege
    res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

// this is dangerous so must be restricted to priviledged users
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});
*/

//serve static file using express
app.use(express.static(__dirname+ '/public'));

//here we first setup our express server using app.use. Later we will
//use it as parameter in http.createserver function
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to Express Server</h1></body><html>');

});

const server = http.createServer(app); //important step 2

server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`);
})