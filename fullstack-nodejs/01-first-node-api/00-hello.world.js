require('http')
    .createServer((request, response) => response.end('hello world!'))
    .listen(8080)