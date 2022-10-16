const router = require('express').Router();
const uniqid = require('uniqid');
const {newNote} = require('../../functions')
let { notes } = require('../../db/db.json')

router.get('/api/notes', (req,res)=>{
   let results = notesArray;
   res.json(results);
});

router.post('/api/notes', (req,res) =>{
   const note = newNote(req.body, notes)
   res.json(note);
}
)
module.exports= router;