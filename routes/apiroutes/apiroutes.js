const router = require('express').Router();
const uniqid = require('uniqid');
const {newNote} = require('../../functions')
let { notes } = require('../../db/db.json')

router.get('/api/notes', (req,res)=>{
   let results = notesArray;
   res.json(results);
});

router.post('/api/notes', (req,res) =>{
   if(notes){
    req.body.id = notes.length.toString();
   } else
   {req.body.id =0}
   res.json(newNote(req.body,notes))
}
)
module.exports= router;