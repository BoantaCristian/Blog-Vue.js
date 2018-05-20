<template>
    <div class="navbar">
        <div class="nav">
            <div class="links">
                <div class="link"><router-link to="/" exact> Home </router-link></div>
                <div class="link"><router-link to="/blog" exact> Blog </router-link></div>
                <div class="link"><router-link to="/about" exact> About </router-link></div>
                <div class="link"><router-link to="/contact" exact> Contact </router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
    
    data() {
        return {
            
           
        }
    },
    methods: {
        
    }
}
</script>

<style>
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
    
}
a{
    color: #ffffff;
    text-decoration: none;
    padding: 12px 70px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 0px 0;
    margin-bottom: 40px;
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