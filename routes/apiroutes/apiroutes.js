const router = require('express').Router();
const uniqid = require('uniqid');
const makeNewNote = require('../../functions')
let { notesArray } = require('../../db/db.json')

router.get('/notes', (req,res)=>{
   let results = notesArray;
   res.json(results);
});

router.post('/notes', (req,res) =>{
    req.body.id = notes.length.toString();
  const note = newNote(req.body, notesArray);
  res.json(note);
 
}
)
module.exports= router;