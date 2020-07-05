console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');

const argv = yargs.argv;

// Accessing the command-line argument
let command = process.argv[2];

console.log('Command:', command);
console.log('Process', process.argv);
console.log('Yargs', argv)

if (command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    console.log('Reading note')
} else if (command === 'remove') {
    console.log('Removing note')
} else {
    console.log('Command not recognized')
}


