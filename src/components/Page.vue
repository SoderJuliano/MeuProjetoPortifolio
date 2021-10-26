<template>
    <div class="main-container">
        <div :style="getStyle()" class="page-header">
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
        <editar-competencias
            :cor="cor"
            :user="user"
            class="editar-competencais"
            id="editarCompetencias"
        />
        <Experiencias
            class="data-container"
            titulo="EXPERIÊNCIAS"
            :cor="cor"
            :lastJob="userExperience.lastJob"
            :job="userExperience.job"
        />
        <editar-experiencias
            :cor="cor"
            class="editar-experiencias"
            :userExperience="userExperience"
        />
    </div>
        
</template>
<script>
import Resumo from "./Resumo.vue"
import Competencias from "./Competencias.vue"
import Experiencias from "./Experiencias.vue"
import editarCompetencias from "./editarCompetencias.vue"
import editarExperiencias from './editarExperiencias.vue'

export default{
    name:"Page",
    components:{
        Resumo,
        Competencias,
        Experiencias,
        editarCompetencias,
        editarExperiencias
    },
    data(){
        return{
            user: {
                name: 'Digite nome',
                profession: 'Sua profissão',
                resume: 'Digite aqui um resumo sobre você.',
                competence: []
            },
            userExperience: {
                lastJob: {
                    title: '',
                    company: '',
                    hired: '',
                    end: '',
                    description: ""
                },
                job: {
                   title: '',
                    company: '',
                    hired: '',
                    end: '',
                    description: ""
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
                //console.log('nname '+nname)
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
            let ljob = localStorage.getItem('lastjob')
            if(ljob && ljob!=null &&ljob!=''){
                let lastjob = ljob.split(',')
                const lastjobDescription = localStorage.getItem('lastjobDescription')
                lastjob.push(lastjobDescription)
                //console.log(lastjob)
                this.userExperience.lastJob.title = lastjob[0]
                this.userExperience.lastJob.company = lastjob[1]
                this.userExperience.lastJob.hired = lastjob[2]
                this.userExperience.lastJob.end = lastjob[3]
                this.userExperience.lastJob.description = lastjobDescription
            }
            let jobE = localStorage.getItem('job')
            if(jobE && jobE!=null && jobE!=''){
                let job = jobE.split(',')
                const jobDescription = localStorage.getItem('jobDescription')
                job.push(jobDescription)
                //console.log(job)
                this.userExperience.job.title = job[0]
                this.userExperience.job.company = job[1]
                this.userExperience.job.hired = job[2]
                this.userExperience.job.end = job[3]
                this.userExperience.job.description = jobDescription
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
    .editar-competencais{
        display: none;
    }
    .editar-experiencias{
        display: none;
    }
}
@media screen and (min-width: 1001px) {
 .main-container{
    display: block;
    height: 100%;
    width: 50%;
    padding-left: 30px;
    box-shadow: 0 0 50px #ccc;
 }
 .editar-competencais{
    width: 40%;
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