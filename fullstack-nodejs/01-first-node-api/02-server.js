const http = require('http');

const port =  process.env.PORT || 1337;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ text: 'Node.js', numbers: [1, 2, 3] }));
});

server.listen(port);
console.log(`Server listening on port ${port}`);