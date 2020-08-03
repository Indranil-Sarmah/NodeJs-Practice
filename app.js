const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');
const { string } = require('yargs');

//console.log(process.argv);
//console.log(yargs.argv);

yargs.command({
    command:'add',
    describe:'Add a new note',
    //builds an opition in nodejs like help,version
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'List a new note',
    handler(){
       notes.listAllnotes();
    }
})

yargs.command({
    command:'read',
    describe:'Read a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption : true,
            type:'string'

        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


//important line
//console.log(yargs.argv);
//or
yargs.parse()
