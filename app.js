const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')
console.log(yargs.argv)

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
    handler: function(argv) {
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
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//Create list command 
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing notes')
    }
})

//Create read command 
yargs.command({
    command: 'read',
    describe: 'read notes', 
    handler: function(){
        console.log('reading a note')
    }
})

yargs.parse() //goes through the process of running the parsing
