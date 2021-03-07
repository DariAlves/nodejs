const fs = require('fs');
const express = require('express');

const port = process.env.PORT || 1337;

const app = express();

function respondText (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Nodejs');
}

function respondJson (request, response) {
    response.json({ text: 'Nodejs', numbers: [1, 2, 3] });
}

function respondNotFound (request, response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');

    console.log(request.url);
}

function respondEcho (request, response) {
    const { input = '' } = request.query;

    response.json({
        normal: input,
        shouty: input.toUpperCase(),
        characterCount: input.length,
        backwards: input
            .split('')
            .reverse()
            .join('')
    });
}

function respondStatic (request, response) {
    const filename = `${__dirname}/public/${request.params[0]}`;
    fs.createReadStream(filename)
        .on('error', () => respondNotFound(request, response))
        .pipe(response)
}

app.get('/', respondText);
app.get('/json', respondJson);
app.get('/echo', respondEcho);
app.get('/static/*', respondStatic);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
