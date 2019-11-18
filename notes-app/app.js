// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'some text')
// fs.appendFileSync('notes.txt','second line of text')

//const nm = require('./utils.js')
//const name = 'RR'

// const add = require('./utils.js')
// const sum = add(4, 2)
// console.log(sum)

// const getNotes = require('./notes.js')
// const msg = getNotes()

// console.log(msg)
// const validator = require('validator')
// console.log(validator.isEmail('abc@gmail'))

// clk = require('chalk')
// const greenMsg = clk.green.inverse.bold('Success')
// //console.log(clk.green.inverse.bold('Success'))
// console.log(greenMsg)

const command = process.argv[2]

// if(command === 'add') {
//     console.log('adding notes')
// } else if(command === 'remove'){
//     console.log('Removing note')
// }
const yargs = require('yargs')
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
        console.log('adding a new note')
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