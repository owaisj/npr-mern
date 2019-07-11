const express = require('express');

const router =  express.Router();
const db = require('../models')

router.get('/', (req, res) => {
    db.Article.find({}).then(articles => res.json(articles))
    .catch(error => res.json(error));
})

module.exports = {
    articles: router,
    scraper: require('./scraper')
}