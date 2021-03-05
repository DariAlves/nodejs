const http = require('http');

const port = process.env.PORT || 1337;

function respondText (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Nodejs');
}

function respondJson (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ text: 'Nodejs', numbers: [1, 2, 3] }));
}

function respondNotFound (request, response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');

    console.log(request.url);
}

const server = http.createServer((request, response) => {
    if (request.url === '/') return respondText(request, response);
    if (request.url === '/json') return respondJson(request, response);

    respondNotFound(request, response);
});

server.listen(port);
console.log(`Server listening on port ${port}`);
