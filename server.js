const express = require('express');
const controller = require('./controller');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

//Middleware to parse JSON with bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//View Folder for Static Assets
if (process.env.NODE_ENV === "production") app.use(express.static('view/build'));

//Controller
app.use('/api/articles', controller.articles);
app.use('/grab', controller.scraper);

app.listen(PORT, () => {
    PORT == 3001 ? 
    //If developing locally, use link to localhost
    console.log(`http://localhost:${PORT}`) : 
    console.log(`Listening on port ${PORT}`);
});