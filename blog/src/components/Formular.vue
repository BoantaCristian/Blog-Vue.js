<template>
    <div class="formular">

        
        <h1>Log In</h1><br><br>
        <form v-if="isLogged === false" class="column-formular gradient-formular">
            <ul class="form-style-1">
                <li>
                    <label>Username </label>
                    <input class="field-long"
                           type="text" 
                           name="usename"
                           v-model="usename"
                           placeholder="Type the username here"> 
                </li> 
                <li>
                    <label>Password </label>
                    <input class="field-long"
                           type="password" 
                           name="password"
                           v-model="password"
                           placeholder="Type the password here"> 
                </li><br><br>
                <li class="center">
                    <button input v-on:click="checkUser" class="post"> <b>Log In</b> </button>
                </li>

                

            </ul><br><br>
        </form> 
        
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>

    import Vue from 'vue'
    import Router from 'vue-router'

    import {bus} from '../main'

    Vue.use(Router)
    const router = new Router()

    export default {
        name: 'formular',
        
       
    data() {
        return {

            usename: 'blogger', //remove text
            password: 'bloggerpass',
            isLogged: false
        }
    },
    watch: {
        nume (value) {
            console.log(value)
        }
    },
    methods: {

        checkUser: function(e){
            e.preventDefault();
            if( this.usename === 'blogger' && this.password === 'bloggerpass')
            {
                this.isLogged = true
                bus.$emit('SetLogIn', this.isLogged)
                this.$router.push({ path: 'blog' });

            }
            else {
                alert("Invalid username or password!");
            }
        }
    }
}
</script>

<style>
    .formular{
        margin: 0 auto !important;
    }
   li{
       color: black;
   }
   .go-blog-button{
    color: #ffffff;
    font-size: 20px;
    text-decoration: none;
    padding: 12px 70px;
    border-radius: 10px;
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
    .form-style-1 input[type=password],
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
        .form-style-1 input[type=password]:focus,
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

.center{
    text-align:center;
}

.post {
    width: 100px;
    padding: 10px 12px;
    background: rgb(255, 58, 58);
    border: 0px solid #000000;
    border-radius: 20px;
    margin:0 auto;
    word-wrap: break-word;
    box-shadow: 0 1px 10px black;
}

.post:hover {
    color: #F65A5B ;
    cursor: pointer;
    background: black;
    transition: background 500ms;
}

    .column-formular {
        margin: 0 auto;
        width: 550px;
        padding: 17px;
        height: 45%;
        border-top: solid;
        border-color: grey;
        border-radius: 40px;
    }

    .column-afterlog {
        display: flex;
        margin: 0 auto;
        width: 550px;
        padding: 17px;
        height: 45%;
        border-top: solid;
        border-color: grey;
        border-radius: 40px;
    }
    .col-txt{
        flex: 50%;
    }

    .gradient-formular {
        background: linear-gradient(to right, rgba(255, 255, 255, 0.527), rgba(191, 191, 191, 0.678));
    }
</style>
