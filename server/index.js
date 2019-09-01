const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/blogs')

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.get('/status', (req,res) => res.send('hello world, the server is working'))

//get blogs from DB 27017
router.route('/blogs').get((req, res) => {
    Blog.find((err,blogs) => {
        if(err)
            console.log(err)
        else
            res.json(blogs)
    })
})

//get blog by id
router.route('/blogs/:id').get((req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if(err)
            console.log(err)
        else
            res.json(blog)
    })
})

//add blogs to db
app.post('/addblog',(req,res) => {
    let blog = new Blog(req.body)

    console.log('Server blog object:', blog)

    //store to db
    blog.save()
        .then(blog => {
            res.status(200).json({'blog': 'Added'})
        })
        .catch(err => {
            res.status(400).send('Failed to create')
        })
})

//delete blog from db
router.route('/deleteblog/:id').get((req, res) => {
    console.log("deleted ", req.params)
    Blog.findByIdAndRemove({_id: req.params.id}, (err, blog) => {
        if(err)
            res.json(err)
        else
            res.json("Removed")
    })
})

//update blog (like and dislike)
app.post('/updateblog/:id', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        console.log('server id ', req.params.id)
        console.log('server id ', req.body)
        if(!blog)
            return next(new Error('Couldn\'t load document!'))
        else {
            
            blog.name = req.body.name
            blog.author = req.body.author
            blog.year = req.body.year
            blog.month = req.body.month
            blog.day = req.body.day
            blog.content = req.body.content
            blog.likes = req.body.likes
            blog.dislikes = req.body.dislikes
                
            blog.save()
            .then(blog => {
                res.status(200).json({'blog': 'Updated'})
            })
            .catch(err => {
                res.status(400).send('Failed to create')
            })
        } 

    })
})

const port = 8081
app.listen(port, () => console.log(`Server listening at ${port}`))
