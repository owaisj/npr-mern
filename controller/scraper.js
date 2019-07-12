const express = require('express');
const router = express.Router();

//ODM
const mongoose = require('mongoose');
const db = require('../models');
//TODO: Review connect method Parameters
mongoose.connect('mongodb://localhost/nprPopulator', { useNewUrlParser: true });

//Scraping Dependencies
const axios = require('axios');
const cheerio = require('cheerio');

/*
    Endpoint
    Schema has title, image, author, blurb, link
*/
const newsURL = 'https://www.kut.org'
router.get('/', (req, res) => {
    axios.get(newsURL).then(response => {
        const $ = cheerio.load(response.data);
        const data = [];
        $('div.node-teaser').each(function(index, element) {
            const header = $(this).children('div.large-12').children('.title-info'); 
            const title = header.children('h2').children('a').text();
            const link = newsURL + header.children('h2').children('a').attr('href');
            const author = {
                name: header.children('.by-date').children('.submitted').children('.name').children('a').text(),
                url: newsURL + header.children('.by-date').children('.submitted').children('.name').children('a').attr('href')
            }

            const content = $(this).children('div.large-12').children('.content');
            const image = content.children('.card-image-container').children('figure').children('a').children('img').attr('src');
            const blurb = content.children('.field').children('.field-items').children('.field-item').children('p').text();

            data[index] = {
                title: title,
                link: link,
                authorName: author.name,
                authorLink: author.url,
                image: image,
                blurb: blurb
            }
            
            db.Article.create(data[index])
            .then(scrapedArticle => console.log(scrapedArticle))
            .catch(error => console.log(error));
        });
        console.log(data);
        return res.send('Grabbed Articles');
    })
})

module.exports = router;