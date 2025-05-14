<template>
    <div class="container-header" :style="getStyle()">
        <div :class="tstyle">
            <div class="line">
                <div v-if="this.userData?.avatarImg?.length > 10" class="l1"></div>
                <div class="ajsut-img" 
                    v-if="userData?.realImg !== '' && userData?.realImg?.length > 10">
                    <CenterImg :language="language" />
                    <CenterImgOpenclose
                        :language="language"
                        :user="userData"
                        @user-update="reEmit"
                        class="ajust-img-open-close"
                    />
                </div>
                <div class="pic">
                    <img @click="$refs.imgInput.click()"
                        v-if="this.userData?.realImg?.length < 10 && this.userData?.avatarImg?.length > 10"
                        :src="this.userData?.avatarImg" alt="perfil-avatar" class="img-avatar" />
                    <img v-if="imageURL?.length > 10" :src="imageURL" alt="perfil" class="img-pic"
                        :style="{ left: posX + 'px', top: posY + 'px' }" @touchstart="startDrag"
                        @mousedown="startDrag" />
                </div>
                <div v-if="this.userData?.avatarImg?.length > 10" class="l2"></div>
            </div>
            <img src="../../icons/header/pencil.png" alt="edit" id="headericon" @click="$emit('add-nome')" />
            <div id="text_header">
                <h2>{{ this.userData?.name }}</h2>
                <h3>{{ this.userData?.profession }}</h3>
            </div>

            <input type="file" id="input" ref="imgInput" style="display:none;" @change="onIMGChange" />
        </div>
    </div>
</template>
<script>

import funcs from "../componentesCompartilhados/utilJS/functions";
import CenterImg from "../../components/utils/centerImg.vue";
import CenterImgOpenclose from "../../components/utils/centerImgOpenClose.vue";
import $ from "jquery";
import * as svgs from "../utils/svgsText.js";

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
    data() {
        return {
            isDragging: false,
            startX: 0,
            startY: 0,
            posX: 0,
            posY: 0,
            imageURL: this.user.realImg,
            tstyle: "profile-style-" + this.fontColor,
            userData: this.user
        }
    },
    methods: {
        startDrag(event) {
            event.preventDefault();
            this.isDragging = true;
            if (window.innerWidth < 1000) {
                // For mobile devices
                this.startX = event.touches[0].screenX - this.posX;
                this.startY = event.touches[0].screenY - this.posY;
                // console.log("mobile")
                document.addEventListener("touchmove", this.onDragMobile);
                document.addEventListener("touchend", this.onStopMobile);
            } else {
                // For desktop devices
                this.startX = event.clientX - this.posX;
                this.startY = event.clientY - this.posY;
                document.addEventListener("mousemove", this.onDrag);
                document.addEventListener("mouseup", this.stopDrag);
            }
        },
        onDrag(event) {
            if (this.isDragging) {
                this.posX = event.clientX - this.startX;
                this.posY = event.clientY - this.startY;
            }
        },
        onDragMobile(event) {
            if (this.isDragging) {
                const clientX = event.touches[0].screenX;
                const clientY = event.touches[0].screenY;
                this.posX = clientX - this.startX;
                this.posY = clientY - this.startY;
            }
        },
        onStopMobile(event) {
            this.isDragging = false;
            document.removeEventListener("touchmove", this.onDragMobile);
            document.removeEventListener("touchend", this.onStopMobile);
        },
        stopDrag() {
            this.isDragging = false;
            document.removeEventListener("mousemove", this.onDrag);
            document.removeEventListener("mouseup", this.stopDrag);
        },
        avaliateFile() {
            const divisor = 4;
            let base64 = sessionStorage.getItem("newImage");
            var img = new Image();
            img.src = base64;
            img.onload = function () {
                // Create a canvas and get its context
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                // Set the canvas size to the desired size
                if (img.width > 800) {
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
                if (this.language.includes("en")) {
                    funcs.isMobile() ? alert("File too large, try a smaller img reducing the image quality in the camera options") :
                        alert("File too large, try a smaller img");
                } else {
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
                    $(".img-pic").css({ "width": "180px", "height": "180px", "display": "flex" });
                    // $(".img-pic").attr('src', url);
                }, 500)
            }
            $(".ajsut-img").css({ "display": "flex", "z-index": "2" });
            $(".template1-formacao-container").css({ "z-index": "1" });
            $("#headericon").css({ "z-index": "1" });
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
        getStyle() {
            return {
                "background-color": this.mainColor,
                "color": `${this.fontColor}`
            }
        }
    },
    watch: {
        user: function (updated) {
            console.log("updated", updated);
            this.userData = updated;
            this.imageURL = this.userData.realImg.length > 10 ? this.userData.realImg : this.userData.avatarImg;
        }
    },
    beforeMount() {
        if (this.userData.avatarImg.length < 10) {
            this.userData.avatarImg = svgs.av1;
        }
    },
    mounted() {
        // console.log("mounted header")
        $(".img-pic").css({ "width": "180px", "height": "180px" });
        $(document).ready(function () {
            function checkWindowSize() {
                if ($(window).width() < 700) {
                    $('.l1, .l2').hide();
                } else {
                    $('.l1, .l2').show();
                }
            }
            checkWindowSize();
            $(window).resize(checkWindowSize);
        });
        if (this.userData?.realImg?.length > 10) {
            $(".ajsut-img").css({ "display": "flex", "z-index": "2" });
            $(".container-header").css({"z-index": "10"})
        }
    }
}
</script>
<style scoped>
.line .ajust-img-open-close {
    transform: rotate(-90deg);
    margin-top: -405px;
    margin-left: 260px;
}

#headericon {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 5%;
    z-index: 2;
}

#headericon:active {
    transform: scale(.9);
}

.container-header {
    width: 100%;
    min-height: 200px;
    background-color: gray;
    z-index: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}


.profile-style-white {
    color: white;
}

.profile-style-black {
    color: #000;
}

.profile-style:hover .editar-animado-nome {
    display: block;
    width: 20px;
}

.editar-animado-nome {
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

.l1,
.l2 {
    margin-top: 80px;
    width: 200px;
    height: 4px;
    background-color: black;
    z-index: 1;
}

.img-avatar {
    width: 180px;
    height: 180px;
    position: relative;
}


.pic {
    overflow: hidden;
    margin: 0 0;
    z-index: 10;
    position: relative;
    width: 180px;
    height: 180px;
    object-fit: cover; /* Mantém proporção correta */
}

.img-pic {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1000px) {
    .pic {
        height: 180px;
        width: 180px;
    }

    .ajsut-img {
        position: absolute;
        top: 100px;
    }
}

@media screen and (max-width: 700px) {
    .l2 {
        display: none;
    }

    .l1 {
        display: none;
    }
}

@media print {

    .l1,
    .l2 {
        display: block !important;
    }
}
</style>