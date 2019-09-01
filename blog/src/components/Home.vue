<template>
    <div class="home">
        <carousel class="col">
            <slide>
                <img src="../assets/blog.jpg" class="img">
                <div class="position">
                    Aren't you curious to see my 
                    <router-link to="/blog"  exact class="click nav-buttons"> Blogs</router-link>
                    ? Rate me up!
                </div>
            </slide>
            <slide>
                <img src="../assets/blog2.jpg" class="img">
                <div class="position">
                    Questions? Don't wait,
                    <router-link to="/contact" exact class="click nav-buttons"> Ask me</router-link>
                </div>
            </slide>
            <slide>
                <img src="../assets/blog3.jpg" class="img">
                <div class="position">
                    Learn more about 
                    <router-link to="/about" exact class="click nav-buttons"> Me </router-link>
                </div>
            </slide>
        </carousel>
        <div class="flex-container gradient-home">
            <div class=" gradient-home">
                <h4> What are blogs</h4> 
                <p class="text"> A blog is a web publication that contains regular and up-to-date news items that are typically personal. As a rule, updating blogs is a collection of new text-like diaries, all of which are displayed in reverse chronological order (the newest appear immediately, at the top).
                                The term "blog" appeared in 1997, when John Berger called his own weblog site.<br><br> If blogs were first updated manually, "tools" (programs and methods) appeared to automate this process. Using such software based on Internet browsers is now a common aspect of blogging.</p></div>
                <div><img src="../assets/blog4.jpg" class="pg"></div>
        </div>
        <div class="flex-container gradient-home">
            <div class=" gradient-home">
                <h4> Practice </h4> 
                <p class="text"> Nobody is perfect! If you fall you need to stand up, the circumstances do not matter. </p>
                <h4> Improve youself </h4> 
                <p class="text"> Be a better person with every ocasion and help peopls every time you can.</p>
            </div>
            <div><img src="../assets/practice.jpg" class="pg"></div>
            <div><img src="../assets/blog6.jpg" class="pg"></div>
        </div>
        <div class="flex-container gradient-home">
            <div><img src="../assets/blog5.jpg" class="pg"></div>
            <div class=" gradient-home">
                <h4> Explore everything </h4> 
                <p class="text">Exploration is the act of searching for the purpose of discovery of information or resources. <br><br>
                Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.<br><br>
                The more you seek more information, the more you discover yourself and those around you.</p>
            </div>
        </div>
        
        <br><br><br><br>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import {bus} from '../main'
    export default {
        name: 'home',
        components: {
            Carousel,
            Slide
        },
    
    data() {
        return {
            logat: false,
           slideIndex:0,
           items: [
               {
                   imageUrl: '../assets/wall3.jpg',
                   id: '1',
                   title:'asgb'
               },
               {
                   imageUrl: '../assets/wall3.jpg',
                   id: '2',
                   title:'awve'
               },
               {
                   imageUrl: '../assets/wall3.jpg',
                   id: '3',
                   title:'awgvaw'
               }
           ]
        }
    },
    created(){
        bus.$on('Nav', (data) => {
            this.logat = data
        })
    },

    destroyed(){
        bus.$emit('Nav', this.logat)
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
.img {
    width:100%;
    height: 70%;
}
.pg {
    width:100%;
}
.text{
    padding: 10px;
    text-align: left;
}
.col {
        position: relative;
        margin: 0 auto;
        text-align: center;
        float: center;
        width: 65%;
        padding: 10px;
        height: 100%;
    }

    .flex-container {
        position: relative;
        margin: 10px auto;
        display: flex;
        width: 65%;
        border-radius: 20px !important;
}
.flex-container  div {
  margin: 10px;
  width: 46%;
  padding: 0px;
  font-size: 18px;
}
.gradient-home {
        background: linear-gradient(to right, white, #BFBFBF);
    }

    .position {
        padding: 0px 10px;
        position: relative;
        top: -10%;
        color:white;
        text-shadow: 1px 1px 1px 1px #000;
        font-size: 20px;
        text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
        line-height: 20px;
        text-align: left;
    }
.click {
    width: 120px;
    padding: 3px 5px;
    background: rgb(255, 99, 99);
    position:relative;
    left: 0%;
    top: -10%;
    text-shadow:none;
    text-align: center;
    box-shadow: 0 1px 10px black;
}
.click:hover {
    color: #F65A5B ;
    cursor: pointer;
    background: rgb(138, 138, 138);
    transition: background 500ms;
}
 </style>