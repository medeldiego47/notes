const fs = require('fs');
const notes = require ('../db/db.json')
const router = require('express').Router();
const uniqid = require('uniqid');


router.get('/api/notes', (req,res)=>{
    fs.readFile('../db/db.json', (err,data)=>{
        err?err : console.log(JSON.parse(data));
        res.send(data)
    })
});

router.post('/api/notes', (req,res) =>{
    let newNote= {
        id: uniqueId(),
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile('../db/db.json', (err,data)=>{
        if (err)throw err;

        let parsedData = JSON.parse(data);
        parsedData.push(newNote);
        console.log(parsedData);

        fs.writeFile('../db/db.json', JSON.stringify(parsedData), (err)=>{
            err?console.log(err): res.send ('note created'
            )
        })
    })
}
)
module.exports= router;