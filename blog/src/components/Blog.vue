<template>
    <div>
        <div class="header">
            <h1>Wellcome to my blog </h1>
        </div>
        <div class="scrollDwn-position" v-if="logat === true">
            <button class="scroll" @click="scrollDown()"><b>ADD A BLOG</b></button>
        </div>
        <div class="column-blog gradient">
            <div v-for="(blog, count) in Blogs" v-bind:key="blog.index" class="single-blog">
                <!-- DISPLAY BLOGS -->
                <div v-if="idEdit !== blog._id"> 
                    <p class="title">{{count+1}}. {{ blog.name }}</p> 
                    <p class="author">{{ blog.author }}</p> 
                    <p class="data">Posted on: {{ blog.day }}/{{ blog.month }}/{{ blog.year }}</p>
                    <p class="content"> {{blog.content}} </p> <br>
                    <div class="raiting">
                        <p class="vote"><b>Vote this blog: </b></p>
                        <p class="likes" 
                            v-on:click="like(blog._id, blog.name, blog.author, blog.year, blog.month, blog.day, blog.content, blog.likes, blog.dislikes)">
                            + {{ blog.likes }} </p>
                        <p class="dislikes" 
                            v-on:click="dislike(blog._id, blog.name, blog.author, blog.year, blog.month, blog.day, blog.content, blog.likes, blog.dislikes)">
                            - {{blog.dislikes}} </p>
                    </div>
                    <button v-if="logat === true" class="edit" v-on:click="editArticle(blog._id, blog.name, blog.author, blog.year, blog.month, blog.day, blog.content, blog.likes, blog.dislikes)"><b>Edit</b></button>
                    <button v-if="logat === true" class="delete" v-on:click="deleteArticle(blog._id)"><b>Delete</b></button>
                </div>
                <!-- EDIT AND POST BLOG -->
                <div v-if="idEdit === blog._id" class="form-style-2">
                    <div class="title">Update {{blog.name}} blog</div> <br>
                    <div class="title">New title
                        <input type="text" v-model="updateName" class="editInput" placeholder=blog.name>
                    </div>
                    <div class="authorUpdate">New author
                        <input type="text" v-model="updateAuthor" class="editInput" placeholder=blog.author>
                    </div>
                    <p class="data">Posted on: {{ blog.day }}/{{ blog.month }}/{{ blog.year }}</p>
                    
                    <div class="contentUpdate">  New content <br>
                        <textarea v-model="updateContent" class="field-long field-textarea "></textarea>
                    </div>
                    
                    <div class="raiting">
                        <p class="vote"><b>Vote this blog: </b></p>
                        <p class="likes" 
                            v-on:click="like(blog._id, blog.name, blog.author, blog.year, blog.month, blog.day, blog.content, blog.likes, blog.dislikes)">
                            + {{ blog.likes }} </p>
                        <p class="dislikes" 
                            v-on:click="dislike(blog._id, blog.name, blog.author, blog.year, blog.month, blog.day, blog.content, blog.likes, blog.dislikes)">
                            - {{blog.dislikes}} </p>
                    </div>
                    <button v-if="logat === true" class="update" v-on:click="updateArticle()"><b>Update blog</b></button>
                    <button v-if="logat === true" class="cancel" v-on:click="cancelUpdate(blog._id)"><b>Cancel</b></button>
                </div>  
            </div>
        </div> <br><br><br>

        <div v-if="logat === true">
            <h1>Add Blog</h1>
        </div>

        <form v-if="logat === true" class="column-formular gradient" v-on:submit="addArticle">
            <ul class="form-style-1">
                <li>
                    <label>Title </label>
                    <input type="text" v-model="name" class="field-long" placeholder="Type the title here"> 
                </li> 
                <li>
                    <label>Author </label>
                    <input type="text" v-model="author" class="field-long" placeholder="Type the author here"> 
                </li>
                <li>
                    <label>Your Content</label>
                    <textarea v-model="content" class="field-long field-textarea" placeholder="Type additional messages here"></textarea>
                </li><br>
                <li class="center">
                    <button input type="submit" value="Submit" class="post"> <b>Post</b> </button>
                </li><br>
            </ul>
        </form><br><br>
        <div class="scrollUp-position">
            <button class="scroll" @click="scrollUp()"><b>GO UP</b></button>
        </div>
        <br><br><br>
    </div>
</template>

<script>

    import Vue from 'vue'
    import NavBar from './NavBar'

    import {bus} from '../main'
    import {busNav} from '../main'


    export default {
        name: 'blog',

    

    data() {
        return {
            logat: false,
            Blogs: [],
            name: '',
            author: '',
            content: '',
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1,
            day: new Date().getDate(),
            likes: 0,
            dislikes: 0,

            idEdit: 0,
            updateName: '',
            updateAuthor: '',
            updateYear: 0,
            updateMonth: 0,
            updateDay: 0,
            updateContent: '', 
            updateLikes: 0,
            updateDislikes: 0
        }
    },
   
    created(){
        bus.$on('Nav', (data) => {
            this.logat = data
        }),

        //getreq
        this.$http.get('http://localhost:8081/blogs').then(function(data){
            this.Blogs = data.body
        })
    },
    destroyed(){
        bus.$emit('Nav', this.logat)
    },
    methods: {
        
        addArticle: function(e){
            //e.preventDefault();
            const name = this.name
            const author = this.author
            const year = new Date().getFullYear()
            const month = new Date().getMonth()+1
            const day = new Date().getDate()
            const content = this.content
            const likes = 0
            const dislikes = 0
            
            this.$http.post('http://localhost:8081/addblog', {
                name,
                author,
                year, 
                month, 
                day,
                content,
                likes,
                dislikes
            }).then(function(data){
                console.log(data.body)
            })
            bus.$emit('Nav', true)
            //window.location.reload()
            this.$router.push({ path: '/' });
            setTimeout(() => this.$router.push({ path: 'blog' }), 10)
            
        },
        
        deleteArticle: function(id){
            this.$http.get(`http://localhost:8081/deleteblog/${id}`)
            bus.$emit('Nav', true)
            //window.location.reload()
            this.$router.push({ path: '/' });
            setTimeout(() => this.$router.push({ path: 'blog' }), 1)
        },
        updateArticle: function(){
            const name = this.updateName
            const author = this.updateAuthor
            const year = this.updateYear
            const month = this.updateMonth
            const day = this.updateDay
            const content = this.updateContent
            const likes = this.updateLikes
            const dislikes = this.updateDislikes

            this.$http.post(`http://localhost:8081/updateblog/${this.idEdit}`, {name, author, year, month, day, content, likes, dislikes}).then(function(data){})

            bus.$emit('Nav', true)
            //window.location.reload()
            this.$router.push({ path: '/' });
            setTimeout(() => this.$router.push({ path: 'blog' }), 1)
        },
        editArticle(id, name, author, year, month, day, content, likes, dislikes){
            this.idEdit = id

            this.updateName = name
            this.updateAuthor = author
            this.updateYear = year
            this.updateMonth = month
            this.updateDay = day
            this.updateContent = content
            this.updateLikes = likes
            this.updateDislikes = dislikes
        },
        cancelUpdate(){
            this.idEdit = 0
        },
        like : function(id, nume, autor, an, luna, zi, continut, aprecieri, neapracieri) {             
            const name = nume
            const author = autor
            const year = an
            const month = luna
            const day = zi
            const content = continut
            const likes = aprecieri + 1
            const dislikes = neapracieri
            this.$http.post(`http://localhost:8081/updateblog/${id}`, {name, author, year, month, day, content, likes, dislikes}).then(function(data){})

            bus.$emit('Nav', true)
            //window.location.reload()
            this.$router.push({ path: '/' });
            setTimeout(() => this.$router.push({ path: 'blog' }), 1)
	    },
         dislike : function(id, nume, autor, an, luna, zi, continut, aprecieri, neapracieri) {             
            const name = nume
            const author = autor
            const year = an
            const month = luna
            const day = zi
            const content = continut
            const likes = aprecieri
            const dislikes = neapracieri + 1
            this.$http.post(`http://localhost:8081/updateblog/${id}`, {name, author, year, month, day, content, likes, dislikes}).then(function(data){})

            bus.$emit('Nav', true)
            //window.location.reload()
            this.$router.push({ path: '/' });
            setTimeout(() => this.$router.push({ path: 'blog' }), 1)
        },
        scrollDown(){
            window.scroll({
            top: 100000000, 
            left: 0, 
            behavior: 'smooth'
            });
        },
        scrollUp(){
            window.scroll({
            top: -100000000, 
            left: 0, 
            behavior: 'smooth'
            });
        }
        
    }
}
</script>

<style>
.scrollDwn-position{
    width: 180px;
    position: absolute;;
    right: 0px;
    top: 80px;
}
.scrollUp-position{
    width: 120px;
    position: absolute;
    right: 0px;
}
.scroll{
    padding: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    left: 0px;
    scroll-behavior: smooth;
    border-radius: 20px;
}

.scroll:hover{
    background: #68686885;
    color: #000000;
    cursor: pointer;
    transition: background 800ms!important;
    transition: color 500ms!important;
}
.data {
    width: 120px;
    padding: 10px 12px;
    background: #F65A5B;
    border: 0px solid #000000;
    border-radius: 10%;
    position:relative;
    left: -70px;
    top: -80px;
    text-align: center;
    box-shadow: 0 1px 10px black;
}

.single-blog{
    padding: 20px;
    margin: 20px 10px 35px 10px;
    box-sizing: border-box;
    background: linear-gradient(to right,rgb(221, 221, 221), rgb(255, 255, 255));
    border-radius: 20px;
}

html, body {
 margin: 0;
 padding: 0;
 font-family: 'Arial', sans-serif;
 width:100%;
}

.header {
 padding: 15px;
}

.header img {
   display: inline-block;
}

h1 {
   display: inline-block;
   color:#fff;
}

.title {
    color: #444;
    margin: 0;
    font-size: 18px;
    font-weight: 800;
}

.author {
    background: linear-gradient(to left, rgb(194, 193, 193), #f4f4f4);
    color: rgb(34, 19, 19);
    font-size: 18px;
    line-height: 30px;
    text-align: right;
    width: 300px;
    position: relative;
    top: 10px;
    right: -460px;
}

.authorUpdate {
    background: linear-gradient(to left, rgb(194, 193, 193), #eeeeee);
    font-size: 18px;
    line-height: 30px;
    text-align: right;
    width: 300px;
    position: relative;
    top: 10px;
    right: -460px;
    color: #444;
    margin: 0;
    font-weight: 800;
}

.content {
    background: linear-gradient(to right, rgba(191, 191, 191, 0.678), rgba(255, 255, 255, 0.527));
    margin: 10px;
    padding: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 18px;
    text-align: justify;
    border-radius: 20px;
}

.contentUpdate {
    background: linear-gradient(to right, rgba(191, 191, 191, 0.678), rgba(255, 255, 255, 0.527));
    margin: 10px;
    padding: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 18px;
    text-align: justify;
    border-radius: 20px;
    color: #444;
    font-weight: 800;
}

.rating {
 text-align: right;
 margin: 30px 0 -30px 20px;
}
.vote {
    padding: 10px 12px;
    color: rgb(31, 31, 31);
    position:relative;
    left: -20px;
    top: 77px;
    font-size: 18px;
    text-align: center;
    width: 140px;
    padding: 10px 12px;
    background: linear-gradient(to right, rgb(139, 139, 139), #eeeeee);
}
.likes,
.dislikes {
    background: #F65A5B ;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    line-height: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10 -30px 0 40px;
    text-align: center;
    font-weight: 200;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: background 500ms;
}

.delete {
    width: 100px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 10%;
    position:relative;
    left: 270px;
    top: 0px;
    text-align: center;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}

.edit {
    width: 100px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 10%;
    position:relative;
    left: 260px;
    top: 0px;
    text-align: center;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}

.update{
    width: 120px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 10%;
    position:relative;
    left: 250px;
    top: 0px;
    text-align: center;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}

.cancel {
    width: 100px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 10%;
    position:relative;
    left: 260px;
    top: 0px;
    text-align: center;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}

.post {
    width: 100px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 20px;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}

.likes:hover,
.dislikes:hover {
    color: #F65A5B ;
    cursor: pointer;
    background: rgba(246, 90, 91, 0.25);
    transition: background 500ms;
}
.delete:hover, .post:hover, .edit:hover, .cancel:hover, .update:hover {
    color: #F65A5B ;
    cursor: pointer;
    background: black;
    transition: background 500ms;
}

.center{
    text-align:center;
}

.column-blog {
        position: relative;
        margin: 0 auto;
        text-align: center;
        float: center;
        width: 800px;
        padding: 10px;
        height: 45%;
        border-top: solid;
        border-color: grey;
        border-radius: 40px;
    }

.column-formular {
        margin: 0 auto;
        width: 550px;
        padding: 10px;
        height: 45%;
        border-top: solid;
        border-color: grey;
        border-radius: 40px;
    }

.gradient {
        background: linear-gradient(to right, rgba(255, 255, 255, 0.527), rgba(191, 191, 191, 0.678));
    }
.editInput{
    padding: 10px;
    list-style: none;
    margin: 15px;
    border: none;
    border-radius: 20px;
    margin: 0 auto;
}

.editInput:focus{
    box-shadow: 0 0 8px red;
    border: 1px solid #FB2F2F;
}

.form-style-1 {
    max-width: 800px;
    width: auto;
    color: rgb(27, 27, 27);
    padding: 20px 12px 10px 20px;
    font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-align: left;
    margin: 0 auto;
}

    .form-style-1 li {
        padding: 0;
        display: block;
        list-style: none;
        margin: 15px 0 0 0;
    }

    .form-style-1 label {
        margin: 0 0 3px 0;
        padding: 0px;
        display: block;
        font-weight: bold;
    }

    .form-style-1 input[type=text],
    .form-style-1 input[type=date],
    .form-style-1 input[type=datetime],
    .form-style-1 input[type=number],
    .form-style-1 input[type=search],
    .form-style-1 input[type=time],
    .form-style-1 input[type=url],
    .form-style-1 input[type=email],
    textarea,
    select {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border: 1px solid #BEBEBE;
        padding: 7px;
        margin: 0px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
    }

        .form-style-1 input[type=text]:focus,
        .form-style-1 input[type=date]:focus,
        .form-style-1 input[type=datetime]:focus,
        .form-style-1 input[type=number]:focus,
        .form-style-1 input[type=search]:focus,
        .form-style-1 input[type=time]:focus,
        .form-style-1 input[type=url]:focus,
        .form-style-1 input[type=email]:focus,
        .form-style-1 textarea:focus,
        .form-style-1 select:focus {
            box-shadow: 0 0 8px red;
            border: 1px solid #FB2F2F;
        }

    .form-style-1 .field-divided {
        width: 49%;
        border-radius: 20px;
    }

    .form-style-1 .field-long {
        width: 100%;
        height: 50px;
        border-radius: 20px;
        margin: 0 auto;
    }

    .form-style-1 .field-select {
        width: 100%;
        border-radius: 20px;
    }

    .form-style-1 .field-textarea {
        height: 100px;
        border-radius: 20px;
    }

    .form-style-1 .required {
        color: red;
    }

    .form-style-2 {
    max-width: 800px;
    width: auto;
    color: rgb(27, 27, 27);
    margin: 0 auto;
}



    .form-style-2 input[type=text],
    .form-style-2 input[type=date],
    .form-style-2 input[type=datetime],
    .form-style-2 input[type=number],
    .form-style-2 input[type=search],
    .form-style-2 input[type=time],
    .form-style-2 input[type=url],
    .form-style-2 input[type=email],
    textarea,
    select {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border: 1px solid #BEBEBE;
        padding: 7px;
        margin: 0px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
    }

        .form-style-2 input[type=text]:focus,
        .form-style-2 input[type=date]:focus,
        .form-style-2 input[type=datetime]:focus,
        .form-style-2 input[type=number]:focus,
        .form-style-2 input[type=search]:focus,
        .form-style-2 input[type=time]:focus,
        .form-style-2 input[type=url]:focus,
        .form-style-2 input[type=email]:focus,
        .form-style-2 textarea:focus,
        .form-style-2 select:focus {
            box-shadow: 0 0 8px red;
            border: 1px solid #FB2F2F;
        }

    .form-style-2 .field-divided {
        width: 49%;
        border-radius: 20px;
    }

    .form-style-2 .field-long {
        width: 100%;
        height: 50px;
        border-radius: 20px;
        margin: 0 auto;
    }

    .form-style-2 .field-select {
        width: 100%;
        border-radius: 20px;
    }

    .form-style-2 .field-textarea {
        height: 100px;
        border-radius: 20px;
    }

    .form-style-2 .required {
        color: red;
    }

</style>