const http = require('http');

const port = process.env.PORT || 1337;

const server = http.createServer((request, response) => {
    response.end('Node.js');
});

server.listen(port);
console.log(`Server listening on port ${port}`);
