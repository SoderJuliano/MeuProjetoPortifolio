<template>
    <div class="main-container">
        <div  :style="getStyle()" class="page-header">
            <span @click="insertName" class="name-title">{{user.name}}</span>
            <input @change="newName" @mouseleave="newName" type="text" :value="`${user.name}`" id="nname" class="input-name">
            <p contenteditable="true" @input="newProfession" class="profession">{{user.profession}}</p>    
        </div>    
        <Resumo
            class="data-container"
            titulo="SOBRE"
            :cor="cor"
            :user="user"
        />
        <Competencias
            class="data-container"
            titulo="COMPETÊNCIAS"
            :cor="cor"
            :user="user"
        />
        <Experiencias
            class="data-container"
            titulo="EXPERIÊNCIAS"
            :cor="cor"
            :lastJob="userExperience.lastJob"
            :job="userExperience.job"
        />
    </div>
        
</template>
<script>
import Resumo from "./Resumo.vue"
import Competencias from "./Competencias.vue"
import Experiencias from "./Experiencias.vue"

export default{
    name:"Page",
    components:{
        Resumo,
        Competencias,
        Experiencias
    },
    data(){
        return{
            user: {
                name: 'Digite nome',
                profession: 'Desenvolvedor',
                resume: 'Sou um amante de tecnologia e adoro estar conectado com o mundo e as pessoas, sempre inovando e buscando o que há de mais novo nas áreas de atuação. Outras grandes paixões são os livros de ficção e drama, filmes e histórias das mais váriadas que aparecem nos games que jogo, em certa ocasião desenvolvi dois minegames, no entanto não os distribui em nenhuma plataforma.',
                competence: ['Trabalho em time', 'Organização de tarefas', 'Liderança Servidora', 'Engajamento', 'Boas práticas para desenvolvimento', 'Duas experiências de trabalho no EUA']
            },
            userExperience: {
                lastJob: {
                    title: 'Desenvolvedor Web',
                    company: 'As freeLancer',
                    hired: '20/02/2021',
                    end: 'Emprego Atual',
                    description: "Estou trabalhando em uma serie de templates para uma empresa de SP, desenvolvendo o front end de um site que auxilia o usuário a criar e personalizar seu próprio currículo."
                },
                job: {
                   title: 'Preparador de Máquinas',
                    company: 'Fras-le S/A',
                    hired: '21/07/2008',
                    end: '11/02/2021',
                    description: "Como preparador de máquinas eu organizava e liderava uma equipe de 20 operadores de prensas, delegando atividades, participando reuniões para melhorar as estratégias de produção, controlando e fazendo relatórios diários."
                }
            }
        }
    },
    props:{
        cor:String
    },
    methods:{
        getStyle(){
            return {'background-color': `${this.cor}`,
                    
            }
        },
        insertName(){
            document.getElementsByClassName('name-title')[0].style.display = 'none'
            document.getElementById('nname').style.display = 'block'
            
        },
        newName(){
            const nname = document.getElementById('nname').value
            if(nname){
                console.log('nname '+nname)
                localStorage.setItem('user-name', nname)
                this.name = nname
                document.getElementsByClassName('name-title')[0].textContent = this.name
               // location.reload() doenst need reload
            }
            document.getElementsByClassName('name-title')[0].style.display = 'block'
            document.getElementById('nname').style.display = 'none'
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
        }
    },
    beforeMount(){
        this.getContatoDataPage()
    }
}
</script>
<style scoped>
.input-name{
    display: none;
    width: 50%;
    height: 30px;
    margin-left: 100px;
}
@media print {
    .main-container{
        display: block;
        height: 100%;
        width: 100%;
        padding-left: 30px;
        font-size: 12px;
    }

}
@media screen and (min-width: 1001px) {
 .main-container{
    display: block;
    height: 100%;
    width: 50%;
    padding-left: 30px;
 }
}
@media screen and(max-width: 1000px) {
 .main-container{
    display: block;
    height: 100%;
    width: 100%;
    padding-left: 30px;
 }
}

.data-container{
    width: 100%;
    height: 100%;
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