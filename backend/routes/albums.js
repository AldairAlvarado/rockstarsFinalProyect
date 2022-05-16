const express = require('express')
const router = express.Router()
const albums = require('../models/album')

//GET All Albums
router.get('/', async(req, res) => {
    try {
        const myalbums = await albums.find()
        res.json(myalbums)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//GET One Album
router.get('/:id', getAlbums, (req, res) => {
   res.json(req.album) 
})

//Create One Album
router.post('/', (req, res) => {
    
})
//Update One Album
router.patch('/:id', (req, res) => {
    
})
//Delete One Album
router.delete('/:id', (req, res) => {
    
})

async function getAlbums(req, res, next) {
    let album
    try {
        album = await albums.findById(req.params.id)
        if (album == null) {
            return res.status(404).json({ message: 'Cannot find album' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.album = album
    next()
}

module.exports = router