<template>
    <div class="main">
        <div class="header">
              <Header 
                :imgURL="imgURL"
                :mainColor="mainColor"
                :user="user"
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
                :mainColor="mainColor"
                :sideColor="sideColor"
            />
            <Right
                @add-info="$emit('add-info')"
                @add-SocialLink="$emit('add-SocialLink')"
                @add-experiencia="$emit('add-experiencia')"
                :user="userData"
                :userExperiences="userExperiences"
                :mainColor="mainColor"
                :sideColor="sideColor"
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
    emits:["add-info", "add-SocialLink", "add-experiencia", "add-resumo", "add-habilidade", "add-nome"],
    props:{
        mainColor: String,
        sideColor: String,
        imageURL: String,
        user: Object,
        redesociais: Array,
        userExperiences: Array,
    },
    data(){
        return{
            imgURL: this.imageURL,
            userData: this.user
        }
    },
    mounted(){
        console.log(this.userData)
    }
}
</script>
<style scoped>
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
</style>