const express = require('express');
let router = express.Router();
const chirpsStore = require('../chirpstore');

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        const data = chirpsStore.GetChirps();
        const chirps = Object.keys(data).map(key => {
            return {
                id: key,
                user: data[key].user,
                chirp: data[key].chirp
            }
        });
        chirps.pop();
        res.send(chirps)
    }
   
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    chirpsStore.DeleteChirp(req.params.id);
    res.sendStatus(200);
})

router.put('/:id', (req, res) => {
    let editedChirp = {
        user: req.body.user,
        chirp: req.body.chirp
    }
    chirpsStore.UpdateChirp(req.params.id, editedChirp);
    res.sendStatus(200);
})


module.exports = router;