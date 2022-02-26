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
            <h2>Name Here</h2>
             <img v-if="template=='template2'" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado-nome" @click="$emit('add-nome')"/>
            <h3>profissao</h3>   

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
    props:{
        imgURL: String,
        mainColor: String
    },
    data(){
        return{
            imageURL: ""
        }
    },
    methods:{
        onIMGChange(img){
        this.imageURL = URL.createObjectURL(img.target.files[0])
        //localStorage.setItem("profileimg", URL.createObjectURL(img.target.files[0]))
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
.container:hover .editar-animado-nome{
    display: block;
}
.editar-animado-nome{
    display: none;
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
@media screen and (max-width: 1050px){
    .l2{
        left: 175px;
    }
    .l1{
        right: 175px;
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