chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove', 
    describe: 'remove a note',
    handler: function(){
        console.log('removing the note')
    }
})

yargs.command({
    command: 'list', 
    describe: 'listing the database',
    handler: function(){
        console.log('listing the database')
    }
})

yargs.command({
    command: 'read', 
    describe: 'reading the database',
    handler: function(){
        console.log('reading the database')
    }
})


console.log(yargs.argv)