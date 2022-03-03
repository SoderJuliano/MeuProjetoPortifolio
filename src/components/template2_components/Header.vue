<template>
    <div class="container" :style="getStyle()">  
        <div class="profile-style">
            <div class="line">
                <div class="l1"></div>
                <div class="l2"></div>
            </div>
            <div @click="$refs.imgInput.click()" class="pic">
                <img :src="imageURL" alt="perfil" class="img-pic"/>
            </div>
            <h2>{{this.user.name}}</h2>
             <img src="../../icons/editar.png" alt="editar" class="editar-animado-nome" @click="$emit('add-nome')"/>
            <h3>{{this.user.profession}}</h3>   

            <input type="file"
                id="input"
                ref="imgInput"  
                style="display:none;"
                @change="onIMGChange"
            />
        </div> 
    </div>
</template>
<script>
export default{
    name: "header",
    emits: ["add-nome"],
    props:{
        imgURL: String,
        mainColor: String,
        user: Object,
    },
    data(){
        return{
            imageURL: ""
        }
    },
    methods:{
        onIMGChange(img){
        this.imageURL = URL.createObjectURL(img.target.files[0])
       
    /*  pra salvar no servidor  
        var formData = new FormData();
       formData.append('file', img.files[0], 'yourFileName.jpg');
    
        var xhr = new XMLHttpRequest();
        xhr.onload = callback; // assuming you've got a callback function
        xhr.open('POST', yourServerSideFileHandlerScript);
        xhr.send(formData);
     */    //localStorage.setItem("profileimg", URL.createObjectURL(img.target.files[0]))
        // the two codes works as well
        // document.getElementsByClassName("img-pic")[0].src = URL.createObjectURL(img.target.files[0])
        },
        getStyle(){
            return{
                "background-color":this.mainColor
            }
        }
    },
    beforeMount(){
        this.imageURL = this.imgURL
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    min-height: 200px;
    background-color: gray;
}
.profile-style:hover .editar-animado-nome{
    display: block;
    width: 30px;
}
.editar-animado-nome{
    display: none;
    z-index: 5;
    position: absolute;
    left: 60%;
}
.pic{
    width: 150px;
    height: 150px;
    margin-top: 40px;
}
.line {
    left: 0px;  
    display:flax;
    width: 100%;
    position: absolute;
    margin-top: 74px;
    justify-content: center;
}
.l1, .l2{
    width: 200px;
    position: relative;
    height: 4px;
    background-color: black;
    margin: 0 auto;
    right: 160px;
    z-index: 1;
}
.l2{
    left: 190px;
}
@media screen and (max-width: 400px){
    .l2{
        left: 111px;
        width: 15%;
    }
    .l1{
        width: 15%;
        right: 95px;
    }
}
@media screen and (max-width: 700px) and (min-width: 401px) {
    .l2{
        display: none;
    }
    .l1{
        display: none;
    }
}
@media screen and (min-width: 701px) and (max-width: 1024px) {
    .l2{
        left: 150px;
        width: 15%;
    }
    .l1{
        width: 15%;
        right: 135px;
    }
}
@media print{
    .l2{
        left: 175px;
    }
    .l1{
        right: 175px;
    }
}
</style>