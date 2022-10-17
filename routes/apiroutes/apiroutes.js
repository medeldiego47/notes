const router = require('express').Router();
const uniqid = require('uniqid');
const makeNewNote = require('../../functions')
let { notesArray } = require('../../db/db.json')

router.get('/notes', (req,res)=>{
   let results = notesArray;
   res.json(results);
});

router.post('/notes', (req,res) =>{
   if(notesArray){
    req.body.id = notes.length.toString();
   } else
   {req.body.id =0}
   res.json(makeNewNote(req.body,notesArray))
}
)
module.exports= router;