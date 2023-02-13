<template>
    <div class="container" :style="getStyle()">  
        <div :class="tstyle">
            <div class="line">
                <div class="l1"></div>
                <div @click="$refs.imgInput.click()" class="pic">
                    <img :src="imageURL" alt="perfil" class="img-pic" />
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
export default {
    name: "header",
    emits: ["add-nome"],
    props: {
        mainColor: String,
        fontColor: String,
        language: String,
        user: Object,
    },
    data(){
        return{
            imageURL: this.user.realImg.length > 5 ? this.user.realImg : this.user.avatarImg.length > 5 ? this.user.avatarImg 
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg==",
            tstyle: "profile-style-"+this.fontColor,
            userData: this.user
        }
    },
    methods:{
        onIMGChange(img) {
            if (img.target.files[0].size > 2762231) {
                alert("Arquivo muito grande, tente uma img menor que 3Mb");
            } else {
                this.imageURL = URL.createObjectURL(img.target.files[0]);
                this.toDataURL(this.imageURL, function (data) {
                    localStorage.setItem("newImage", data);
                });
                setTimeout(() => {
                    this.userData.realImg = localStorage.getItem("newImage");
                    this.userData.avatarImg = "";
                    localStorage.setItem("user", JSON.stringify(this.userData))
                }, 400);
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
}

@media screen and (max-width: 1000px ) {
    .pic {
        max-height: 150px;
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

</style>