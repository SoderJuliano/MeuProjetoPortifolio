<template>
    <div class="main-container">
        <div :style="getStyle()" class="page-header">
            <div style="width: 100%; text-align: center;">
                <span class="name-title">{{u.name}}</span>
                <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-nome')"/>
            </div>
            <div style="width: 100%; text-align: center; padding-top: 20px;">
                <span  @input="newProfession" class="profession">{{u.profession}}</span>
                <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-profissao')"/>
            </div>
                
        </div>    
        <Resumo
            @add-resumo="$emit('add-resumo')"
            class="data-container"
            titulo="SOBRE"
            :cor="cor"
            :user="u"
        />
        <Competencias
            @add-competencia="$emit('add-competencia')"
            class="data-container"
            titulo="COMPETÊNCIAS"
            :cor="cor"
            :user="u"
        />
        <Experiencias
            @add-experiencia="$emit('add-experiencia')"
            class="data-container"
            titulo="EXPERIÊNCIAS"
            :cor="cor"
            :experiences="userExperiences"
        />
    </div>
</template>
<script>
import Resumo from "./Resumo.vue"
import Competencias from "./Competencias.vue"
import Experiencias from "./Experiencias.vue"

export default{
    name:"Page",
    emits:['add-resumo', 'add-competencia', 'add-experiencia', 'add-nome', 'add-profissao'],
    data(){
        return{
            u: this.user
        }
    },
    components:{
        Resumo,
        Competencias,
        Experiencias,
    },
    props:{
        cor: String,
        fontSize: String,
        user: Object,
        userExperiences: Array,
        language: String,
    },
    methods:{
        getStyle(){
            return {
                'background-color': `${this.cor}`,
                'font-size': `${this.fontSize}`,
                'font-weiht': 'bold'
            }
        },
        newProfession(){
            const prof = document.getElementsByClassName('profession')[0].textContent
            console.log(prof)
            if(prof){
                this.u.profession = prof
                localStorage.setItem('profession', prof)           
            }
        },
    },
}
</script>
<style scoped>
.editar{
    padding-top: 15px;
    margin: 10px;
}
@media print {
    .main-container{
        display: block;
        height: 100%;
        width: 100%;
        padding-left: 30px;
    }
    .editar-competencais{
        display: none;
    }
    .editar-experiencias{
        display: none;
    }
    .editar{
        display: none;
    }
}
@media screen and (min-width: 1001px) {
 .main-container{
    display: block;
    height: 100%;
    width: 70%;
    min-width: 600px;
    padding-left: 30px;
    box-shadow: 0 0 50px #ccc;
 }
 .editar-competencais{
    width: 40%;
    max-width: 380px;
    min-height: 200px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    top: 100px;
    left: 40%;
    padding: 10px;
    position: absolute;
    z-index: 5;
 }
  .editar-experiencias{
    width: 40%;
    min-height: 200px;
    max-height: 100%;
    border-radius: 20px;
    border: white solid 2px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    color:white;
    top: 100px;
    left: 40%;
    padding: 10px;
    position: absolute;
    overflow: scroll;
    scrollbar-width: 0px;
    z-index: 5;
 }
 ::-webkit-scrollbar { 
    display: none; 
}

}
@media screen and(max-width: 1000px) {
 .main-container{
    display: block;
    height: 100%;
    width: 100%;
    padding-left: 30px;
 }
 .editar-competencais{
    width: 100%;
    height: 100%;
    display: none;
    padding: 50px;
    background-color: whitesmoke;
    z-index: 5;
 }
  .editar-experiencias{
    width: 100%;
    height: 100%;
    display: none;
    padding: 50px;
    background-color: whitesmoke;
 }
}

.data-container{
    width: 100%;
    display: block;
}

.page-header{
    color:white;
    width: 100%;
    min-height: 150px;
    max-height: 100%;
    padding: 40px 0px;
    text-align: center;
    justify-content: center;
    align-self: center;
}

.name-title{
    font-size: 40px;
    letter-spacing: 1px;
    font-weight: bold;
}
.profession{
    font-size: 35px;
    font-weight: bold;
}
</style>