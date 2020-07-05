const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const getAll = () => {
    console.log('Getting all notes')
}

const getNote = (title) => {
    console.log('Getting note', title)
}

const removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};