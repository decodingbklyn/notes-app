const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find( ( note ) => note.title === title )
    
    if ( !duplicateNote ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    } else {
        console.log(chalk.bgRed('note title taken'))
    }
}

const removeNote = (title) => {
    const notes= loadNotes()
    const keptNotes = notes.filter( ( note ) =>  note.title !== title)
    
    if(notes.length === keptNotes.length){
        console.log(chalk.bgRed("No not found!"))
    } else {
        saveNotes(keptNotes)
        console.log(chalk.bgGreen("Note Removed"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(( note ) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote =  notes.find((note) => note.title === title)
    if (foundNote){
        console.log(chalk.bgBlue.inverse(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.bgRed.inverse('No note found?'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote: readNote
}