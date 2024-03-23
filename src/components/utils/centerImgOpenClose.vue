<template>
    <div class="main-open-close">
        <img @click="$refs.fileInput.click()" class="photo" src="../../icons/camera-svgrepo-com.svg" alt="camera">
        <img id="close" @click="close()" src="../../assets/correct.svg" alt="V">
        <img id="open" @click="open()" src="../../assets/resize.svg" alt="< >">
        <input
          type="file"
          id="input"
          ref="fileInput"
          style="display: none"
          @change="onIMGChange"
        />
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    name: "CenterImgOpenclose",

    props: {
        user: Object,
        language: String
    },

    data() {
        return {
            userData: this.user
        }
    },

    emits: [
        "user-update"
    ],

    methods: {
        close() {
            $("#open").css("display", "block");
            $("#close").css("display", "none");
            $(".main.centerImg").css("display", "none");
        },
        open() {
            $("#open").css("display", "none");
            $("#close").css("display", "block");
            $(".main.centerImg").css("display", "block");
        },
        onIMGChange(img) {
            if (img.target.files[0].size > 2762231) {
                alert("Arquivo muito grande, tente uma img menor que 3Mb");
            } else {
                $(".img-pic").css("display", "block");
                $(".img-avatar").css("display", "none");
                this.imageURL = URL.createObjectURL(img.target.files[0]);
                this.toDataURL(this.imageURL, function (data) {
                    localStorage.setItem("newImage", data);
                });
                setTimeout(() => {
                    this.userData.realImg = localStorage.getItem("newImage");
                    this.$emit("user-update", this.userData);
                    // localStorage.setItem(this.language.includes("en") ? "user-en" : "user-pt", JSON.stringify(this.userData));
                }, 400);
            }

            $(".ajsut-img").css("display", "flex");
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
    },
    mounted() {
        console.log("recived userData")
        console.log(this.userData)
        console.log("user")
        console.log(this.user)
    }
}


</script>

<style scoped>

.photo {
    position: absolute;
    margin-top: -140px;
}

.main-open-close {
    width: 40px;
}

.main-open-close img 
{
    width: 100%;
}

#open {
    display: none;
}

@media print {
    .main-open-close {
        display: none;
    }
}

</style>