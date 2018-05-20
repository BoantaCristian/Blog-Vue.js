<template>
    <div class="about">
        <div class="header">
            <h1>Contact</h1>
        </div>
        <div class="column2">
                <div class="continut">
                    <b>
                       <h3>You can contact me at:</h3> 
                       <div class="p">Email: cristi_cristi222@yahoo.com</div>
                       <div class="p">Gmail: cboanta92@gmail.com</div>
                       <div class="p">Facebook: Cristi Boanta</div>
                    </b> <br><br><br><br>

                </div>
                <iframe src="https://wego.here.com/directions/mix//Facultatea-de-Automatic%C4%83,-Bulevardul-Decebal,-200440-Craiova:642jx7ps-2f6c482fae9e0f8a7a6165850f12fa70?map=44.30832,23.83422,15,normal" style="width:100%;height:400px;"></iframe>
        </div><br><br><br>
    </div>
</template>
<script>
    export default {
        name: 'about',
    
    data() {
        return {
            
           
        }
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
h1 {
   display: inline-block;
   color:#fff;
}

h3 {
    color: #ffff;
}
.p {
    font-size: 17px;
    color: black;
    padding: 10px 22px;
    margin: 10px 0px 0px 0px;
    text-align: left;
    background:linear-gradient(to left,transparent, #BFBFBF);
}
.continut {
    margin:  20px; 
    font-size: 16.5px;
    text-align: left;
    width: 96%;

}
.column2 {
        position: relative;
        margin: 0 auto;
        text-align: center;
        float: center;
        width: 800px;
        padding: 10px;
        height: 45%;
    }
.gradient {
        background: linear-gradient(to right, white, #BFBFBF);
    }
</style>