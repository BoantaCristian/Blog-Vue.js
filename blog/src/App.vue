<template>
  <div id="app" class="bg">
      <NavBar/>
      
       <router-view ></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Formular from './components/Formular'
import Blog from './components/Blog'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    HelloWorld,
    Formular,
    Blog,
    NavBar,
    Contact,
    About
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.bg {
        background-image: url("./assets/wall3.jpg");
        background-repeat: repeat-y;
        height: 100%;
        margin: 0;
    }

</style>
