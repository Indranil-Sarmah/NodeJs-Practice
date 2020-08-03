const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return 'This is my notes';
}


//Add Notes
const addNote = (title,body)=>{
    const notes = loadNotes();

    //ES6
    const duplicateNotes = notes.filter((note)=>note.title===title);

    // const duplicateNotes = notes.filter(function(note){

    //     return note.title===title;

    // });

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
//normal function can be arrow function
const removeNote = (title)=>{

    const notes = loadNotes();

    //ES6
    const filteredNotes = notes.filter((note)=>note.title !== title);

    // const filteredNotes = notes.filter(function(note){

    //     return note.title !== title;

    // });

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

const listAllnotes = ()=>{
    const notes = loadNotes();

    if(notes.length === 0)
    {
        console.log(chalk.yellow('No, Notes found'));
    }
    else
    {
        console.log(chalk.blue('Your notes are :'));
        notes.forEach(note => {
            console.log(chalk.green(note.title) +':'+chalk.cyan(note.body));    
        });
        
    }
}



//Save Notes
const saveNotes = (notes)=>{
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);

}


//load Notes
const loadNotes = ()=>{

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
    removeNote : removeNote,
    listAllnotes : listAllnotes
};