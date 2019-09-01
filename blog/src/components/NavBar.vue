<template>
    <div class="navbar">
        <div class="nav">
            <div class="links">
                <div class="link"><router-link class="nav-buttons" to="/" exact> Home </router-link></div>
                <div class="link"><router-link class="nav-buttons" to="/blog" exact> Blog </router-link></div>
                <div class="link"><router-link class="nav-buttons" to="/about" exact> About </router-link></div>
                <div class="link"><router-link class="nav-buttons" to="/contact" exact> Contact </router-link></div>
            </div>

            <div v-if="isLogged === false" class="login">
                <div class="link"><router-link class="login-button" to="/formular">Log-in </router-link></div>
            </div>
            
            <div v-if="isLogged === true" class="login">
                <div class="hello"> <b>Hello Blogger</b></div>
                <button input v-on:click="logOut" class="logout"> <b>Log Out</b> </button>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    import Formular from '@/components/Formular.vue'
    
    import {bus} from '../main'
    import {busNav} from '../main'
    
    export default {
        name: 'navbar',
    
    data() {
        return {
            isLogged: false
        }
    },

    mounted(){
        bus.$on('SetLogIn', (data) => {
            this.isLogged = data
        })
    },

    updated(){
        bus.$emit('Nav', this.isLogged)
    },

    methods: {
        logOut: function(){
            this.isLogged = false;
            this.$router.push({ path: 'Formular' })
        }
    }
}
</script>

<style>
.logout {
    width: 100px;
    position: absolute;
    top: -7px;
    right: 0px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 20px;
    margin:0 auto;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}
.links{
    position: relative;
    left: 0px;
    list-style-type: none;
    text-align: center;
    margin: 5px;
}
.link{
    display: inline-block;
    margin:0;
    font-size: 20px;
    text-decoration: none;
    
}
.login{
    position: absolute;
    right: 30px;
    top: 19px;
    text-decoration: none !important;
    font-size: 20px;
    color: #ffffff;
}

.hello{
    font-size: 18px;
    position: absolute;
    right: 120px;
    top: 1px;
    width: 120px;
}

.nav-buttons{
    color: #ffffff;
    text-decoration: none;
    padding: 12px 70px;
    border-radius: 10px;
}

.login-button{
    color: #ffffff;
    text-decoration: none;
    border-radius: 20px;
    margin: 5px;
    padding: 8px;
    text-decoration: none !important;
}

a:hover {
    cursor: pointer;
    color: #F65A5B ;
    background: rgb(81, 81, 81);
    transition: background 500ms;
}

.router-link-active{
    background: #F65A5B;
    color: #444;
}

.nav{
    background: rgb(37, 37, 37);
    padding: 14px 0;
    margin-bottom: 30px;
}

</style>