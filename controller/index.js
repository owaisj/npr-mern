const express = require('express');

const router =  express.Router();
const db = require('../models')

router.get('/', (req, res) => {
    db.Article.find({}).then(articles => res.json(articles))
    .catch(error => res.json(error));
})

router.get('/:id', (req, res) => {
    db.Article.findOne({_id: req.params.id})
    .populate('note').then(article => res.json(article))
    .catch(error=>res.json(error));
})

//Create a note
router.post('/:id', (req, res) => {
    //req.body is an object with keys title & body
    console.log(req.body);
    console.log(req.params.id);
    db.Note.create(req.body)
    .then(note=> {
        
        const options = [
            { _id: req.params.id },
            { note: note._id },
            { new: true }
        ];

        //Note: return the updated article to use promise
        return db.Article.findOneAndUpdate(...options);
    }).then(article => {
        console.log(article)
        return res.json(article)
    }).catch(error=>res.json(error)); 
})

module.exports = {
    articles: router,
    scraper: require('./scraper')
}