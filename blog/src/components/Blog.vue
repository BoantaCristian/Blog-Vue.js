<template>
    <div class="blog">
        <div class="header">
            <h1>Wellcome to my blog</h1>
        </div>

        <div class="column gradient">
            <div v-for="(blog, count) in Data" v-bind:key="blog.index" class="single-blog">
            <div> 
                        <p class="title">{{count+1}}. {{ blog.name }}</p> 
                        <p class="author">{{ blog.author }}</p> 
                        <p class="data">Posted on: {{ blog.pubdate.day }}/{{ blog.pubdate.month }}/{{ blog.pubdate.year }}</p>
                        <p class="content"> {{blog.content}} </p> <br>
                        <div class="raiting">
                            <p class="vote"><b>Vote this blog: </b></p>
                            <p class="likes" v-on:click="plusOne(count)">+ {{ blog.likes }} </p>
                            <p class="dislikes" v-on:click="minusOne(count)">- {{blog.dislikes}} </p>
                        </div>
                        <button class="delete" v-on:click="deleteArticle(blog)"><b>Delete</b></button>
                    </div>  
            </div>
        </div> <br><br><br>

        <div>
            <h1>Add Blog</h1>
        </div>

        <form class="column gradient" v-on:submit="addArticle" v-on:click="saveFile()">
            <ul class="form-style-1">
                <li>
                    <label>Title </label>
                    <input type="text" v-model="Data.name" class="field-long" placeholder="Type the title here"> 
                </li> 
                <li>
                    <label>Author </label>
                    <input type="text" v-model="Data.author" class="field-long" placeholder="Type the author here"> 
                </li>
                <li>
                    <label>Your Content</label>
                    <textarea v-model="Data.content" class="field-long field-textarea" placeholder="Type additional messages here"></textarea>
                </li><br>
                <li>
                    <button input type="submit" value="Submit" class="delete"> <b>Post</b> </button>
                </li><br>
            </ul>
        </form><br><br><br>
        
    </div>
</template>

<script>

    import Data from '../assets/Data.json'
    export default {
        name: 'blog',
    
    data() {
        return {
            Data
            //Data:Data.reverse() //for last blogs on top
            
        }
    },
   
    mounted() {
        Data.reverse() //for last blogs on top
    },
    methods: {
        addArticle: function(e){   //addArticle on the top of the list
            this.Data.splice(0,0,{
                name: this.Data.name,
                author: this.Data.author,
                pubdate: {year: new Date().getFullYear(),month:new Date().getMonth()+1, day: new Date().getDate()},
                content: this.Data.content,
                likes: 0,
                dislikes: 0 
                
            });
            e.preventDefault();
        },
        
        /*addArticle: function(e){   //addArticle on the top of the list
            this.Data.push({
                name: this.Data.name,
                author: this.Data.author,
                pubdate: {year: new Date().getFullYear(),month:new Date().getMonth()+1, day: new Date().getDate()},
                content: this.Data.content,
                likes: 0,
                dislikes: 0 
                
            });
            e.preventDefault();
        },*/

        deleteArticle: function(blog){
            this.Data.splice(this.Data.indexOf(blog), 1);
            
        },
        saveFile: function() {
           
        },
        plusOne : function(count) { 
  	        Data[count].likes++; 
	    },
         minusOne : function(count) {
            Data[count].dislikes++;
        }, 
    }
}
</script>

<style>

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
    margin: 20px 10px;
    box-sizing: border-box;
    background: #eeeeee
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
    background: linear-gradient(to left, rgb(194, 193, 193), #eeeeee);
    color: rgb(34, 19, 19);
    font-size: 18px;
    line-height: 30px;
    text-align: right;
    width: 300px;
    position: relative;
    top: 0px;
    right: -460px;
}

.content {
    font-size: 17px;
    height: 100%;
    line-height: 20px;
    text-align: justify;
    width: 100%;
}

.rating {
 text-align: right;
 margin: 30px 0 -30px 20px;
}
.vote {
    padding: 10px 12px;
    position:relative;
    left: -31px;
    top: 77px;
    font-size: 18px;
    text-align: center;
    width: 140px;
    padding: 10px 12px;
    background: linear-gradient(to right, rgb(255, 255, 255), #eeeeee);
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
    left: 320px;
    top: 0px;
    text-align: center;
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
.delete:hover{
    color: #F65A5B ;
    cursor: pointer;
    background: black;
    transition: background 500ms;
}

.column {
        position: relative;
        margin: 0 auto;
        text-align: center;
        float: center;
        width: 800px;
        padding: 10px;
        height: 45%;
        border-top: solid;
        border-color: grey;
    }
.gradient {
        background: linear-gradient(to right, white, #BFBFBF);
    }

.form-style-1 {
    max-width: 800px;
    width: auto;
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
    }

    .form-style-1 .field-long {
        width: 100%;
    }

    .form-style-1 .field-select {
        width: 100%;
    }

    .form-style-1 .field-textarea {
        height: 100px;
    }

    .form-style-1 .required {
        color: red;
    }

</style>