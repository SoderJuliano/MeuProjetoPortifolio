<template>
    <div class="template-data-social">
        <div class="social">
            <h3 @mouseover="hovert" @mouseleave="leavehovert" :class="templateClass" :style="getStyle()">
                {{language == 'pt-br' ? titulo[0] : titulo[1]}}
                <showSwitcher className="template-data-social" :startShowing="user.social.length > 0" />
                <img id='edit' src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-SocialLink')"/>
                <img v-if="template== 2" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado" @click="$emit('add-SocialLink')"/></h3>
        </div>
        <div :class="template == 2 ? templateClassItemContainer : 'social-row'">
            <div :class="templateClassItem" v-for="(item, index) in this.userData.social" :key="index" >
                <div v-if="item.includes('github') || item.includes('youtube') || item.includes('linkedin') || item.includes('stackoverflow') || item.includes('facebook') || item.includes('twitter')">
                    <img v-if="item.includes('github')" src="../../icons/git.png" class="social-icon"/>
                    <img v-if="item.includes('youtube')" src="../../icons/youtube.png" class="social-icon"/>
                    <img v-if="item.includes('linkedin')" src="../../icons/in.png" class="social-icon"/>
                    <img v-if="item.includes('stackoverflow')" src="../../icons/stof.jpeg" class="social-icon"/>
                    <img v-if="item.includes('facebook')" src="../../icons/face.png" class="social-icon"/>
                    <img v-if="item.includes('twitter')" src="../../icons/twit.png" class="social-icon"/>
                </div>
                <img v-else src="../../icons/page.svg" alt="svg" class="social-icon">
                <a v-if="item.includes('link:')" :href="item.split('link:')[1]">{{ item.split("link:")[1] }}</a>
                <span v-else>{{item}}</span>
                <img @click="remove" :id="`${item}`" class="remove-bnt" src="../../icons/remove.png" alt="remove-bnt"/>
                <!-- fazer um componente para este botao -->
                <img @click="remove" :id="`${item}`" class="remove-bnt-delete" src="../../icons/animados/lixeira.gif" alt="remove-bnt"/>
            </div>
        </div>
    </div>
</template>
<script>

import showSwitcher from '../iconComponent/showSwitcher.vue';

export default {
    name: "Social",
    components: {
        showSwitcher
    },
    props:{
        template: Number,
        titulo: Array,
        language: String,
        backgroundColor: String,
        user: Object,
        sideColor: String,
    },
    emits:['add-SocialLink'],
    data(){
        return{
            templateClass: "social-template"+this.template+" title",
            templateClassItemContainer: "social-itens-template"+this.template,
            templateClassItem: "social-item-template"+this.template,
            social: this.user.social,
            userData: this.user
        }
    },
    methods:{
        remove(event){
            this.userData.social.splice(this.userData.social.indexOf(event.target.id), 1)
            localStorage.setItem(this.language.includes("en") ? "user-en" : "user-pt", JSON.stringify(this.userData))
            //this.$emit('update-user', this.userData)
        },
        getStyle(){
            return{
                "border-bottom": "1px solid "+this.sideColor
            }
        },
        hovert(){
            this.template == 2 ?
            document.getElementById("edit").style.display = "none" : '';
        },
        leavehovert(){
            document.getElementById("edit").style.display = "block";
        }
    }
}
</script>
<style>
@media screen and (max-width: 1000px) {
    .remove-bnt {
        position: absolute;
        right: 40px;
    }
}
</style>
<style scoped>

.remove-bnt {
    position: absolute;
    margin-left: 70px;
}

a {
    min-height: 30px;
    padding-top: 10px;
}

span {
    min-height: 30px;
}
.social-template1{
    align-self: center;
    background-color: white;
    color: black;
    font-weight: bolder;
    width: 80%;
    margin: 0 auto;
    margin-top: 0px;
    margin-top: 10px;
    text-align: center;
    padding: 5px;
}
.social-container{
    width: 80%;
    height: 100%;
    align-self: center;
    margin: 0 auto;
    display: block;
}
.social-icon{
    width: 25px;
    height: 25px;
    padding-top: 10px;
    margin-right: 10px;
}
.social-row{
    padding: 5px;
    width: 80%;
    margin-left: 10%;
}
.social-row span{
    padding-top: 10px;
    word-break: break-all;
}
@media print{
    .social-row{
        display: block;
        padding: 0px !important;
        /* if set 100% here the links texts overflows the side div size */
        /* So its better keep it 80s % */
        width: 80%;
    }
    .social-row span{
        word-break: break-all;
    }
    .social-container{
        margin: 0 auto;
        padding-top: 0px;
    }
    .remove-bnt{
        display: none;
    }
}

@media screen and (min-width: 1000px) {
    .template-data-social{
        min-height: 100px;
        background-color: rgb(255 240 240);
        border-radius: 5px;
    }
}

@media screen and (max-width: 600px) {
    .social-template1 {
        width: 97% !important;
    }
}
@media (min-width: 600px) and (max-width: 1000px) {
    .social-template1 {
        width: 99% !important;
    }
}
</style>
