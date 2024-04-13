<template>
    <div class="container" :style="getStyle()">  
        <div :class="tstyle">
            <div class="line">
                <div class="l1"></div>
                <div class="ajsut-img">
                    <CenterImg :language="language" />
                    <CenterImgOpenclose 
                    :language="language"
                    :user="userData" 
                    @user-update="reEmit"
                    class="ajust-img-open-close" 
                    />
                </div>
                <div @click="$refs.imgInput.click()" class="pic">
                    <img 
                        v-if="this.userData?.realImg?.length < 10 && this.userData?.avatarImg?.length > 10" 
                        :src="this.userData?.realImg" 
                        alt="perfil-avatar" 
                        class="img-avatar" 
                    />
                    <img 
                        v-if="imageURL?.length > 10"
                        :src="imageURL"
                        alt="perfil"
                        class="img-pic"
                    />
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
                <h2>{{this.userData?.name}}</h2>
                <h3>{{this.userData?.profession}}</h3>   
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

import funcs from "../componentesCompartilhados/util/functions";
import CenterImg from "../../components/utils/centerImg.vue";
import CenterImgOpenclose from "../../components/utils/centerImgOpenClose.vue";
import $ from "jquery";

export default {
    name: "header",
    emits: ["add-nome", "local-update-user"],
    components: {
        CenterImg, CenterImgOpenclose
    },
    props: {
        mainColor: String,
        fontColor: String,
        language: String,
        user: Object,
    },
    data(){
        return{
            imageURL: this.user.realImg.length > 5 ? this.user.realImg
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg==",
            tstyle: "profile-style-"+this.fontColor,
            userData: this.user
        }
    },
    methods:{
        avaliateFile() {
            const divisor = 4;
            let base64 = sessionStorage.getItem("newImage");
            var img = new Image();
            img.src = base64;
            img.onload = function() {
                // Create a canvas and get its context
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                // Set the canvas size to the desired size
                if(img.width > 800) {
                    canvas.width = img.width / divisor;
                    canvas.height = img.height / divisor;
                } else {
                    canvas.width = img.width;
                    canvas.height = img.height;
                }

                // Draw the image onto the canvas
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Get a new data URL from the canvas
                var resizedImage = canvas.toDataURL();

                // Store the resized image
                localStorage.setItem("newImage", resizedImage);
            }
        },
        onIMGChange(img) {
            if (img.target.files[0].size > 2762231) {
                if(this.language.includes("en") ) {
                    funcs.isMobile() ? alert("File too large, try a smaller img reducing the image quality in the camera options") :
                    alert("File too large, try a smaller img");
                }else {
                    funcs.isMobile() ? alert("Arquivo muito grande, tente uma img menor que 3Mb reduzindo a qualidade da imagem nas opções de câmera") :
                    alert("Arquivo muito grande, tente uma img menor que 3Mb");
                }
            } else {
                const url = URL.createObjectURL(img.target.files[0]);
                
                this.toDataURL(url, function (data) {
                    sessionStorage.setItem("newImage", data);
                });
                setTimeout(() => {
                    this.avaliateFile();
                }, 200);
                setTimeout(() => {
                    this.userData.realImg = localStorage.getItem("newImage");

                    // console.log("atualizacao ", this.userData)
                    
                    this.$emit("local-update-user", this.userData);
                    // localStorage.setItem(this.language.includes("en") ? "user-en" : "user-pt", JSON.stringify(this.userData));
                }, 400);

                setTimeout(() => {
                    this.imageURL = this.userData.realImg;
                    $(".img-pic").css({"width": "150px", "height": "150px"});
                // $(".img-pic").attr('src', url);
                }, 500)
            }
            $(".ajsut-img").css({"display": "flex", "z-index": "2"});
            $(".template1-formacao-container").css({"z-index": "1"});
            $("#headericon").css({"z-index": "1"});
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
    watch: {
        user: function(updated) {
            // console.log("updated", updated);
            this.userData = updated;
            this.imageURL = this.userData.realImg;
        }
    },
    mounted() {
        // console.log("mounted header")
        $(".img-pic").css({"width": "150px", "height": "150px"});
    }
}
</script>
<style scoped>

.line .ajust-img-open-close {
    transform: rotate(-90deg);
    margin-top: -405px;
    margin-left: 260px;
}

#headericon
{
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 5%;
    z-index: 2;
}

#headericon:active {
    transform: scale(.9);
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
    width: 20px;
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
    z-index: 10;
    overflow: hidden;
    position: relative;
}

.img-pic {
    position: relative;
    z-index: 0;
}

.container {
    position: relative;
    z-index: 10;
}

@media screen and (max-width: 1000px ) {
    .pic {
        max-height: 150px;
    }
}

@media screen and (max-width: 700px) {
    .l2{
        display: none;
    }
    .l1{
        display: none;
    }
}

</style>