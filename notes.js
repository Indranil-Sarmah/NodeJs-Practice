const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'This is my notes';
}


//Add Notes
const addNote = function(title,body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note){

        return note.title===title;

    });

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title:title,
            body:body
        });

        saveNotes(notes);
        console.log(chalk.bgBlue('Note Added'));
        
    }
    else
    {
        console.log(chalk.bgRed('Note with given titile, taken already'));
    }
    

    
}
//Remove Notes
const removeNote = function(title){

    const notes = loadNotes();

    const filteredNotes = notes.filter(function(note){

        return note.title !== title;

    });

    if(notes.length === filteredNotes.length)
    {
        console.log(chalk.bgRed('Note Not Found'));
    }
    else
    {
        console.log(chalk.bgGreen('Note Deleted'));
        saveNotes(filteredNotes);
    }
}



//Save Notes
const saveNotes = function(notes){
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);

}


//load Notes
const loadNotes = function(){

    try{

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    }
    catch(e){
        return [];
    }
}

module.exports={
    getNote : getNotes,
    addNote : addNote,
    removeNote : removeNote
};