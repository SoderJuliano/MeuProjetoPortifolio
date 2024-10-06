<template>
    <div class="avatares-container">
        <p class="tside" @click="openContainer()">{{ this.language.includes("en") ? "CHOOSE AN AVATAR" : "ESCOLHA UM AVATAR"}}</p>
        <div class="avatares-subcontainer">
            <div class="closeDiv" @click="closeDiv()">X</div>
            <div class="avatar-line">
                <img class="avatar"
                    id="a1"
                    @click="changeAvatar"
                    :src=av1
                    alt="avatar"
                />
                <img class="avatar"
                    @click="changeAvatar"
                    id="a2"
                    :src=av2
                    alt="avatar"
                />
                <img class="avatar"
                    @click="changeAvatar"
                    id="a3"
                    :src=av3
                    alt="avatar"
                />
                <img class="avatar"
                    @click="changeAvatar"
                    id="a4"
                    :src=av4
                    alt="avatar"
                />
            </div>
            <div class="avatar-line">
                <img class="avatar"
                    @click="changeAvatar"
                    id="a5.1"
                    :src=av5
                    alt="avatar"
                />
                <img class="avatar"
                    @click="changeAvatar"
                    id="a6"
                    :src=av6
                    alt="avatar"
                />
                <img class="avatar"
                    @click="changeAvatar"
                    id="a5"
                    src="../icons/avatares/no-img.png"
                    alt="avatar"
                />
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import * as svgs from '../components/utils/svgsText.js'

export default {
    name: "avatares",
    props:{
        user: Object,
        language: String
    },
    data(){
        return {
            userData: this.user,
            av1: svgs.av1,
            av2: svgs.av2,
            av3: svgs.av3,
            av4: svgs.av4,
            av5: svgs.av5,
            av6: svgs.av6
        }
    },
    emits:['update-user'],
    methods:{
        closeAll() {
            $(".side-colors").css({"display": "none"});
            $(".colors").css({"display": "none"});
            $(".dropdown-content").css({"display": "none"});
            $(".avatares-subcontainer").css({"display": "none"});
            $(".shapes").css({"display": "none"});
            $(".dropdown-templates").css({"display": "none"});
        },
        changeAvatar(id){

            let windowWidth = window.innerWidth;

            if(windowWidth > 700){
                $(".l1").css("display", "block")
                $(".l2").css("display", "block")
            }

            $(".pic").css("display", "block")
            $(".ajsut-img").css("display", "none")
            $(".template1-formacao-container").css({"z-index": "3"});
            $("#headericon").css({"z-index": "2"});

            // console.log("o id é ->"+id.target.id)

            if(id.target.id=="a1"){
                this.userData.avatarImg = this.av1
            }else if(id.target.id=="a2"){
                this.userData.avatarImg = this.av2
            }
            else if(id.target.id=="a3"){
                this.userData.avatarImg = this.av3
            }
            else if(id.target.id=="a4"){
                this.userData.avatarImg = this.av4
            }
            else if(id.target.id=="a5"){
                $(".l1").css("display", "none")
                $(".l2").css("display", "none")
                $(".pic").css("display", "none")
                this.userData.avatarImg = "none"
            }
            else if(id.target.id=="a5.1"){
                this.userData.avatarImg = this.av5
            }
            else if(id.target.id=="a6"){
                this.userData.avatarImg = this.av6
            }

            this.userData.realImg = "";

            //img-pic
            $(".pic .img-avatar").attr("src", this.userData.avatarImg);

            this.$emit('update-user', this.userData);

            $(".pic .img-pic").css({"display": "none"});

            setTimeout(() => {
                $(".pic .img-avatar").css({"display": "block","width": "150px", "height": "150px", "border-radius": "50%", "padding": "0px"});
            }, 400);
        },
        openContainer(){
            this.closeAll();
            $(".avatares-subcontainer").css({"display": "grid", "position": "absolute"});
        },
        closeDiv(){
            $(".avatares-subcontainer").css({"display": "none"});
        }
    },
    watch: {
        user: {
        deep: true,
        //handle the change
        handler() {
            this.userData = this.user
        }
        }
    }
}
</script>
<style scoped>
.avatar-line{
    display: flex;
    margin: 10px;
}
.avatar{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
}

</style>
<style>
.tside{
    width: 60%;
    border-radius: 10px;
    padding: 10px;
}

.tside.touch .multimenu-line {
    width: 100px;
}

.avatares-subcontainer{
    display: none;
    padding: 15px;
    height: 150px;
    width: 300px;
    border-style: solid;
    border-color: black;
    background-color: rgba(245, 245, 245, 0.514);
    margin-left: 15px;
    margin-top: -15px;
    justify-content: space-around;
    display: none;
    overflow-y: scroll;
}

@media screen and (max-width: 1000px) {
    .avatares-subcontainer {
        position: absolute;
        top: 10%;
        width: 80vw;
    }
}
</style>