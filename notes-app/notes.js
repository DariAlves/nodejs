const addNote = (title, body) => {
    console.log('Adding note', title, body);
};

const getAll = () => {
    console.log('Getting all notes')
}

module.exports = {
    addNote,
    getAll
};