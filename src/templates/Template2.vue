<template>
    <div class="main">
        <div class="header">
            <Header 
                :mainColor="mainColor"
                :fontColor="fontColor"
                :user="userData"
                :language="language"
                @add-nome="$emit('add-nome')"
                @local-update-user="reEmit"
            />
        </div>
        <div class="main-body">
            <Left
                :user="userData"
                @update-formacao="onUpdateFormacao"
                @add-resumo="$emit('add-resumo')"
                @add-competencia="$emit('add-competencia')"
                @add-formacao="$emit('add-formacao')"
                @add-habilidade="$emit('add-habilidade')"
                @adicionar-habilidade="$emit('adicionar-habilidade')"
                @choose-educationIcon="$emit('choose-educationIcon')"
                @choose-skillIcon="$emit('choose-skillIcon')"
                @update-competences="reEmitCompetences"
                :mainColor="mainColor"
                :sideColor="sideColor"
                :language="language"
            />
            <Right
                @user-update="reEmit"
                @choose-emailIcon="this.$emit('choose-emailIcon')"
                @choose-addressIcon="$emit('choose-addressIcon')"
                @add-info="$emit('add-info')"
                @add-SocialLink="$emit('add-SocialLink')"
                @add-experiencia="$emit('add-experiencia')"
                @update-experiencias="$emit('update-experiencias')"
                @choose-phoneIcon="this.$emit('choose-phoneIcon')"
                :user="userData"
                :mainColor="mainColor"
                :sideColor="sideColor"
                :language="language"
            />
        </div>
    </div>
</template>

<script>
import { onUpdated } from 'vue';
import Header from '../components/template2_components/Header.vue'
import Left from '../components/template2_components/Left.vue'
import Right from '../components/template2_components/Right.vue'

export default {
    name: 'template2',
    components: {
        Header,
        Left,
        Right
    },
    emits:["add-info",
        "add-SocialLink",
        "update-competences",
        "add-experiencia",
        "add-resumo",
        "add-habilidade",
        "add-nome",
        "adicionar-habilidade",
        "update-experiences",
        "choose-addressIcon",
        "choose-phoneIcon",
        "choose-emailIcon",
        "choose-educationIcon",
        "choose-skillIcon",
        "local-update-user"],
    props:{
        mainColor: String,
        sideColor: String,
        user: Object,
        fontColor: String,
        redesociais: Array,
        userExperiences: Array,
        language: String,
    },
    data(){
        return{
            userData: this.user
        }
    },
    methods:{
        reEmit(data){
            this.$emit('local-update-user', data);
        },
        reEmitCompetences(data){
            this.$emit('update-competences', data);
        },
        onUpdateFormacao(newval) {
            this.userData.grade = newval;
            this.$emit('local-update-user', this.userData);
        }
    },
    watch: {
        user: function(updated) {
            console.log("updated", updated);
            this.userData = updated;
            this.imageURL = this.userData.realImg;
        }
    },
}
</script>
<style scoped>
.main {
    display: block;
    box-shadow: 0px 0px 30px 1px;
}
.header{
    display: flex;
    justify-content:center;
    text-align: center;
}
.main-body{
    display:flex;
    width: 100%;
    min-height: 400px;
    height: 100%;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

@media screen and (max-width: 1000px) {
.main-body{
    display:block;
    width: 100%;
    min-height: 400px;
    height: 100%;
}
}
</style>
