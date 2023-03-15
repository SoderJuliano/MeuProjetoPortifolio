<template>
    <div class="main">
        <div class="header">
            <Header 
                :mainColor="mainColor"
                :fontColor="fontColor"
                :user="userData"
                :language="language"
                @add-nome="$emit('add-nome')"
            />
        </div>
        <div class="main-body">
            <Left 
                :user="userData"
                @add-resumo="$emit('add-resumo')"
                @add-competencia="$emit('add-competencia')"
                @add-formacao="$emit('add-formacao')"
                @add-habilidade="$emit('add-habilidade')"
                @adicionar-habilidade="$emit('adicionar-habilidade')"
                :mainColor="mainColor"
                :sideColor="sideColor"
                :language="language"
            />
            <Right
                @choose-addressIcon="$emit('choose-addressIcon')"
                @add-info="$emit('add-info')"
                @add-SocialLink="$emit('add-SocialLink')"
                @add-experiencia="$emit('add-experiencia')"
                @update-experiences="$emit('update-experiences')"
                :user="userData"
                :mainColor="mainColor"
                :sideColor="sideColor"
                :language="language"
            />
        </div>
    </div>
</template>

<script>
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
    emits:["add-info", "add-SocialLink", "add-experiencia", "add-resumo", "add-habilidade", "add-nome", "adicionar-habilidade", "update-experiences",
    "choose-addressIcon"],
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
}
</script>
<style scoped>
@media print {
    .main{
        box-shadow: none !important;
    }
}
.main{
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