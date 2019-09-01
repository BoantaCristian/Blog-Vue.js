const mongoose = require('mongoose')

const Schema = mongoose.Schema

let BlogSchema = new Schema({
    name: String,
    author: String,
    year: Number,
    month: Number,
    day: Number,
    content: String,
    likes: Number,
    dislikes: Number
})
const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog; // ES5
//export default Song;     //ES6