const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    blurb: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    authorLink: {
        type: String
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;