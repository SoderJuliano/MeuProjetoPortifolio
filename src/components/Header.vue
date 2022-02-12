<template>
    <div class="container">   
        <div @click="$refs.fileInput.click()" class="pic">
            <img :src="imageURL" alt="perfil" class="img-pic"/>
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
    name: "header"
}
</script>
<style scoped>
.container {
    width: 80%;
    min-height: 200px;
    background-color: blueviolet;
}
.pic{
    width: 150px;
    height: 150px;
    margin-top: 20px;
}
.pic::after{
    min-width: 200px;
    height: 4px;
    background-color:black;
}
.pic::before{
    min-width: 200px;
    height: 4px;
    background-color:black;
}
</style>