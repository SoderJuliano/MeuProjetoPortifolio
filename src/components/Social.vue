<template>
    <div class="social">
        <h3 @mouseover="hovert" @mouseleave="leavehovert" :class="templateClass" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}} 
            <img id='edit' src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-SocialLink')"/>
            <img v-if="template== 2" src="../icons/animados/editar.gif" alt="editar" class="editar-animado" @click="$emit('add-SocialLink')"/></h3>
    </div>
    <div :class="template == 2 ? templateClassItemContainer : 'social-row'">
        <div :class="templateClassItem" v-for="(item, index) in this.user.social " :key="index" >
            <img v-if="item.includes('github')" src="../icons/git.png" class="social-icon"/>
            <img v-if="item.includes('youtube')" src="../icons/youtube.png" class="social-icon"/>
            <img v-if="item.includes('linkedin')" src="../icons/in.png" class="social-icon"/>
            <img v-if="item.includes('stackoverflow')" src="../icons/stof.jpeg" class="social-icon"/>
            <img v-if="item.includes('facebook')" src="../icons/face.png" class="social-icon"/>
            <img v-if="item.includes('twitter')" src="../icons/twit.png" class="social-icon"/>
            
            <span>{{item}}</span> 
            <img @click="remove(item)" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
            <!-- fazer um componente para este botao -->
            <img @click="remove(item)" :id="`${item}`" class="remove-bnt-delete" src="../icons/animados/lixeira.gif" alt="remove-bnt"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Social",
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
            templateClass: "social-template"+this.template,
            templateClassItemContainer: "social-itens-template"+this.template,
            templateClassItem: "social-item-template"+this.template,
            social: this.user.social,
            userData: this.user
        }
    },
    methods:{
        remove(id){
            document.getElementById(id).style.display = "none"
            let rs = localStorage.getItem('redesociais')
            let newarray = rs.split(",")
            newarray.splice(rs.split(",").indexOf(id), 1)
            this.social = newarray
            localStorage.setItem('redesociais', newarray)
            this.userData.social = this.social
            this.$emit('update-user', this.userData)
        },
        getStyle(){
            return{
                "border-bottom": "1px solid "+this.sideColor,
                "background-color": this.backgroundColor
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
    .remove-bnt{
        position: absolute;
        right: 40px;
    }
}
</style>
<style scoped>
.social-template1{
    align-self: center;
    background-color: white !important;
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
    width: 30px;
    height: 30px;
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
        width: 100%;
    }
    .social-container{
        margin: 0 auto;
        padding-top: 0px;
    }
    .remove-bnt{
        display: none;
    }
}
</style>