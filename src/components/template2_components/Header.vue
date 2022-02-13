<template>
    <div class="container">  
        <div class="profile-style">
            <div class="line">
                <div class="l1"></div>
                <div class="l2"></div>
            </div>
            <div @click="$refs.fileInput.click()" class="pic">
                <img :src="imgURL" alt="perfil" class="img-pic"/>
            </div>
            <h2>Name Here</h2>
            <h3>profissao</h3>    
        </div> 
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
    width: 120px;
    height: 120px;
    margin-top: 40px;
}
.line {
    left: 0px;  
    display:flax;
    width: 100%;
    position: absolute;
    margin-top: 60px;
    justify-content: center;
}
.l1, .l2{
    width: 200px;
    position: relative;
    height: 4px;
    background-color: black;
    margin: 0 auto;
    right: 145px;
    z-index: 1;
}
.l2{
    left: 175px;
}
@media screen and (max-width: 1050px){
    .l2{
        left: 161px;
    }
    .l1{
        right: 159px;
    }
}
</style>