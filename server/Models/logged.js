const mongoose = require('mongoose')

const Schema = mongoose.Schema

let BlogSchema = new Schema({
    isLogged: Boolean
})
const Logged = mongoose.model('Blog', BlogSchema)

module.exports = Logged; // ES5
//export default Song;     //ES6