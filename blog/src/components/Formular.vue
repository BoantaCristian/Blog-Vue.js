<template>
    <div class="formular">
        <h1>Formular</h1>
        <ul>
            <li v-for="article in articles">
                {{article.title}}:{{article.author}}:{{article.content}} <button v-on:click="deleteArticle(article)">x</button>
            </li>
        </ul>

        <form class="column gradient" v-on:submit="addArticle">
            <ul class="form-style-1">
                <li>
                    <label>Title </label>
                    <input type="text" v-model="newArticles.title" class="field-long" placeholder="Type the title here"> 
                </li> 
                <li>
                    <label>Author </label>
                    <input type="text" v-model="newArticles.author" class="field-long" placeholder="Type the author here"> 
                </li>
                <li>
                    <label>Your Message</label>
                    <textarea v-model="newArticles.content" class="field-long field-textarea" placeholder="Type additional messages here"></textarea>
                </li>
                <li>
                    <button input type="submit" value="Submit" class="buttonmic buttonmic1"> Post </button>
                </li>
            </ul></br></br>
        </form></br></br></br>
        
    </div>
</template>

<script>
    export default {
        name: 'formular',
    
    data() {
        return {
            
            newArticles: {},
            articles: [
                {
                    title: 'Titlu',
                    author: 'Ana',
                    content: 'A long string'
                }
            ]
        }
    },
    methods: {
        addArticle: function(e){
            this.articles.push({
                title: this.newArticles.title,
                author: this.newArticles.author,
                content: this.newArticles.content,
            });
            e.preventDefault();
            
        },
        deleteArticle: function(article){
            this.articles.splice(this.articles.indexOf(article), 1);
            
        }
    }
}
</script>

<style>
   
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

    .button {
        background-color: #9A1010; /* Green */
        border: none;
        color: white;
        padding: 16px 87px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        cursor: pointer;
    }

    .buttonmic {
        position: absolute;
        left: 44%;
        background-color: #AA2626; /* Green */
        border: none;
        color: white;
        padding: 7px 17px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 4px 2px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        cursor: pointer;
    }

    .button1:hover {
        background-color: #555555;
        color: white;
        padding: 17px 88px;
        font-size: 17px;
    }

    .buttonmic1:hover {
        background-color: #555555;
        color: white;
        padding: 8px 18px;
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
        background: linear-gradient(to top, white, #BFBFBF);
    }
</style>