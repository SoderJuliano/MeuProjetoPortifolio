<template>
    <div class="main-container">
        <div :style="getStyle()" class="page-header">
            <div style="width: 100%; text-align: center;">
                <span class="name-title">{{user.name}}</span>
                <img src="../icons/editar.png" alt="editar" class="editar" @click="showModal('nome')"/>
            </div>
            <div style="width: 100%; text-align: center; padding-top: 20px;">
                <span @input="newProfession" class="profession">{{user.profession}}</span>
                <img src="../icons/editar.png" alt="editar" class="editar" @click="showModal('profissao')"/>
            </div>
                
        </div>    
        <Resumo
            @add-resumo="editarResumo"
            class="data-container"
            titulo="SOBRE"
            :cor="cor"
            :user="user"
        />
        <Competencias
            @add-competencia="editarCompetencias"
            class="data-container"
            titulo="COMPETÊNCIAS"
            :cor="cor"
            :user="user"
        />
        <Experiencias
            @add-experiencia="editarExperiencias"
            class="data-container"
            titulo="EXPERIÊNCIAS"
            :cor="cor"
            :experiences="userExperiences"
        />
    </div>
     <editorInformacoes 
        :mainTitle="modal.mainTitle"
        :title="modal.title1"
        :placeholder="modal.placeholder1"
        :competencia="user.competence"
        :title2="modal.title2"
        :placeholder2="modal.placeholder2"
        :experiences="userExperiences"
     />
</template>
<script>
import Resumo from "./Resumo.vue"
import Competencias from "./Competencias.vue"
import Experiencias from "./Experiencias.vue"
import editorInformacoes from './editorIformacoes.vue'

export default{
    name:"Page",
    components:{
        Resumo,
        Competencias,
        Experiencias,
        editorInformacoes
    },
    data(){
        return{
            modal: {
                mainTitle: "",
                title1: "",
                placeholder1: "",
                title2: "",
                placeholder2: "",
                list: [],
            },
            user: {
                name: 'Digite nome',
                profession: 'Sua profissão',
                resume: 'Digite aqui um resumo sobre você.',
                competence: []
            },
            userExperiences: [],
        }
    },
    props:{
        cor: String,
        fontSize: String
    },
    methods:{
        editarExperiencias(){
            this.showModal('experiencias')
        },
        editarCompetencias(){
            this.showModal('competencias')
        },
        editarResumo(){
            this.showModal('resumo')
        },
        showDivModal(){
            document.getElementsByClassName("main-modal-container")[0].style.width = "100vw";
            document.getElementsByClassName("main-modal-container")[0].style.heigth = "100vh";
            document.getElementsByClassName("main-modal-container")[0].style.opacity = "100";
            document.getElementsByClassName("main-modal-container")[0].style.zIndex = "10";
        },
        showModal(qual){
            switch (qual) {
                case 'nome':
                    this.modal.mainTitle = "Informacoes pessoais"
                    this.modal.title1 = "Nome"
                    this.modal.placeholder1 = "digite seu nome aqui"
                    this.modal.list = []
                    this.showDivModal()
                    break;
                case 'profissao':
                    this.modal.mainTitle = "Informacoes pessoais"
                    this.modal.title1 = "Profissao"
                    this.modal.placeholder1 = "digite seu cargo/profissao"
                    this.modal.list = []
                    this.showDivModal()
                    break;
                case 'competencias':
                    this.modal.mainTitle = "Competencias"
                    this.modal.title1 = "Nova competencia"
                    this.modal.placeholder1 = "escreva uma hasbilidade sua"
                    this.modal.list = this.user.competence
                    this.showDivModal()
                    break;
                case 'resumo':
                    this.modal.mainTitle = "Resumo profissional"
                    this.modal.title1 = "Sobre voce"
                    this.modal.placeholder1 = "Descreva que tipo de proficional voce e..."
                    this.modal.list = this.user.competence
                    this.showDivModal()
                    break;
                case 'experiencias':
                    this.modal.mainTitle = "Experiencia profissional"
                    this.modal.title1 = "Nome da empresa"
                    this.modal.placeholder1 = "Digite aqui"
                    this.modal.title2 = "Cargo que ocupava"
                    this.modal.placeholder2 = "Digite aqui"
                    this.showDivModal()
                    break;
                default:
                    break;
            }
        },
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
                this.user.profession = prof
                localStorage.setItem('profession', prof)           
            }
        },
        getContatoDataPage(){ 
            const nname = localStorage.getItem('user-name')
            if(nname){
                this.user.name = nname
            }
            const prof = localStorage.getItem('profession')
            if(prof){
                this.user.profession = prof
            }
            const about = localStorage.getItem('about')
            if(about){
                this.user.resume = about
            }
            const competencias = localStorage.getItem('cpta')
            if(competencias){
                const arr = competencias.split(',')
                this.user.competence = arr
            }
        },
        getExperienceData(){
            let jobs = JSON.parse(localStorage.getItem('jobs'))
            if(jobs){
                console.log(jobs)
                this.userExperiences = jobs
            }
        }
    },
    beforeMount(){
        this.getContatoDataPage()
        this.getExperienceData()
    }
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