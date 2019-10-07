const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//add, remove, read,  list
//Create add command 

yargs.command({
    command: 'add', 
    describe: 'Add a new Note', //expanation of the command
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //option is required
            type: 'string'
        }, 
        body: {
            describe: 'note information', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a Note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create list command 
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        console.log(chalk.bgGreen.inverse('Your Notes!'))
        notes.listNotes()
    }
})

//Create read command 
yargs.command({
    command: 'read',
    describe: 'read notes', 
    builder: {
        title: {
            describe: 'note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse() //goes through the process of running the parsing
