const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    let notes = 'These are my notes'
    return notes
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter( function( note ){
        return note.title === title
    })
    console.log(duplicateNotes)
    if ( duplicateNotes.length === 0 ) {
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

const removeNote = function(title) {
    const notes= loadNotes()
    const keptNotes = notes.filter( function (note) {
        return note.title !== title
    })
    
    if(notes.length === keptNotes.length){
        console.log(chalk.bgRed("No not found!"))
    } else {
        saveNotes(keptNotes)
        console.log(chalk.bgGreen("Note Removed"))
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote, 
    removeNote: removeNote
}