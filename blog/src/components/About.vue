<template>
    <div class="about">
        <div class="header">
            <h1>About me</h1>
        </div>
        <div class="column1 gradient">
            
                <p class="paragraph"><b>Introduction</b></p>
                <div class="continut">
                    <b>
                        Hello, my name is {{userData.nume}} {{userData.prenume}}, I am {{userData.age}} years and I am student of {{userData.study}}  {{userData.profile}} in year {{userData.year}}
                        and this is my first vue.js app done from scratch.<br><br>
                        After I came in contact with web development I have noticed that this is an interesting, challenging and satisfying IT domain and I want to improve
                        my skills in this direction to develop more complex apps.<br><br>
                        I implemented things that may not be needed, but I have done them to learn and and practice more features of a web app using vueJS.
                    </b> <br><br><br><br>
                </div>
                <p class="paragraph"><b>Challenges</b></p>
                <div class="continut">
                        <b>
                            One of the most challenging part was to define an aspect to the blog, such as page content fitting and find the right position of elements (date, author, etc.) <br><br>
                            Implement likes and dislikes, because there was a conflict with data (increment the like/dislike of another post)<br><br>
                            An interesting thing was to get data from my github (using HTTP request), load it into an empty object and display it on the interface.<br><br>
                            Another interesting thing was to make the form in order to post and update the data on the interface.<br><br>
                            Vue.js's carousel library is very useful, because is I coded  less than if I create a carousel from the beginning
                        </b> 
                    </div>
            
        </div><br>
        
        
    </div>
</template>

<script>
    export default {
        name: 'about',
    
    data() {
        return {
            userData: [],
           
        }
    },
     mounted() {

        
            
          this.$http.get('https://gist.githubusercontent.com/BoantaCristian/09a9cb1a2f1fdb2a25c4fc29159032b0/raw/a1cabbf0810d81d2247862642e52431991ef7461/gistfile1.txt').then(function(data){
                this.userData = data.body
            });
        
    },
    methods: {
        
    }
}
</script>

<style>
 html, body {
 margin: 0;
 padding: 0;
 font-family: 'Arial', sans-serif;
 width:100%;
}
.paragraph {
    font-size: 17px;
    width: 130px;
    padding: 15px 22px;
    background: #F65A5B;
    border: 0px solid #000000;
    border-radius: 10%;
    position:relative;
    left: -50px;
    top: -34px;
    text-align: center;
    box-shadow: 0 1px 10px black;
}
h1 {
   display: inline-block;
   color:#fff;
}

.continut {
    margin:  20px; 
    font-size: 16.5px;
    text-align: left;
    width: 96%;

}
.column1 {
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
</style>