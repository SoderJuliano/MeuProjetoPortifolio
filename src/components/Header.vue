<template>
    <div class="container">   
        <div @click="$refs.fileInput.click()" class="pic">
            <img :src="imgURL" alt="perfil" class="img-pic"/>
        </div>
        <h2>Name Here</h2>
        <h3>profissao</h3>
    </div>
    <input type="file"
        id="input"
        ref="fileInput"  
        style="display:none;"
        @change="onIMGChange"
    />
</template>
<script>
export default{
    name: "header",
    props:{
        imgURL: String,
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    min-height: 200px;
    background-color: blueviolet;
}
.pic{
    width: 100px;
    height: 100px;
    margin-top: 40px;
}
/* .pic::after{
    position: relative;
    top:40%;
    content:  "<div></div>";
    min-width: 100px;
    background-color:black;
}
.pic::before{
    position: relative;
    top:40%;
    content:  "<div></div>";
    min-width: 100px;
    height: 2px;
    background-color:black;
} */
</style>