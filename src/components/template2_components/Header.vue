<template>
    <div class="container" :style="getStyle()">  
        <div :class="tstyle">
            <div class="line">
                <div class="l1"></div>
                <div class="l2"></div>
            </div>
            <div @click="$refs.imgInput.click()" class="pic">
                <img :src="imageURL" alt="perfil" class="img-pic"/>
            </div>
            <ion-icon style="position: absolute; margin-left: 100px; margin-top: 50px;" eios="ios-create-outline" md="md-create" @click="$emit('add-nome')"></ion-icon>
            <h2>{{this.user.name ? this.user.name : language == 'pt-br' ? "Seu nome" : "Your name"}}</h2>
            <h3>{{this.user.profession ? this.user.profession : language == 'pt-br' ? "Sua profissão" : "Your profession"}}</h3>   

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
        mainColor: String,
        fontColor: String,
        language: String,
        user: Object,
    },
    data(){
        return{
            imageURL: "",
            tstyle: "profile-style-"+this.fontColor
        }
    },
    methods:{
        onIMGChange(img) {
            if (img.target.files[0].size > 2762231) {
                alert("Arquivo muito grande, tente uma img menor que 3Mb");
            } else {
                this.imageURL = URL.createObjectURL(img.target.files[0]);
                this.toDataURL(this.imageURL, function (data) {
                    console.log("Vou salvar o arquivo " + data);
                    localStorage.setItem("profileImg", data.split("data:image/")[1]);
                    console.log(
                        "Eu salvei o arquivo " + localStorage.getItem("profileImg")
                    );
                });
            }
        },
        toDataURL(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var reader = new FileReader();
                reader.onloadend = function () {
                callback(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.send();
        },
        getStyle(){
            return{
                "background-color":this.mainColor,
                "color": `${this.fontColor}`
            }
        }
    },
    beforeMount(){
        this.imageURL = this.user.img
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    min-height: 200px;
    background-color: gray;
}

.profile-style-white {
    color: white;
}

.profile-style-black {
    color: #000;
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