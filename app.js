const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');

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
    handler:function(argv){
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
    handler:function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'List a new note',
    handler:function(){
        console.log(chalk.bgYellow.bold.red('Listing a new note'));
    }
})

yargs.command({
    command:'read',
    describe:'Read a new note',
    handler:function(){
        console.log(chalk.bgYellow.bold.red('Reading a new note'));
    }
})


//important line
//console.log(yargs.argv);
//or
yargs.parse()
