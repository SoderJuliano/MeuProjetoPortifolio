<template>
    <div class="container" :style="getStyle()">  
        <div :class="tstyle">
            <div class="line">
                <div class="l1"></div>
                <div @click="$refs.imgInput.click()" class="pic">
                <img :src="imageURL" alt="perfil" class="img-pic"/>
            </div>
                <div class="l2"></div>
            </div>
            <img 
                src="../../icons/header/pencil.png" 
                alt="edit" 
                id="headericon"  
                @click="$emit('add-nome')" 
            />
            <div id="text_header" >
                <h2>{{this.user?.name}}</h2>
                <h3>{{this.user?.profession}}</h3>   
            </div>
            
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

#headericon
{
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 5%;
}

#headericon:active {
    transform: scale(1.5);
}

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
.line {
    left: 0px;  
    display: flex;
    width: 100%;
    margin-top: 74px;
    justify-content: center;
}
.l1, .l2{
    margin-top: 80px;
    width: 200px;
    height: 4px;
    background-color: black;
    z-index: 1;
}

.pic {
    margin: 0 0;
}

@media screen and (max-width: 700px) and (min-width: 401px) {
    .l2{
        display: none;
    }
    .l1{
        display: none;
    }
}

</style>