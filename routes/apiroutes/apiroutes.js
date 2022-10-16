const router = require('express').Router();
const uniqid = require('uniqid');
const {newNote} = require('../../functions')
let { notesArray } = require('../../db/db.json')

router.get('/notes', (req,res)=>{
   let results = notesArray;
   res.json(results);
});

router.post('/notes', (req,res) =>{
    if(notesArray){
        req.body.id = notesArray.length.toString();
    } else
    {req.body.id = 0}
    res.json(newNote(req.body,notesArray));
}
)
module.exports= router;