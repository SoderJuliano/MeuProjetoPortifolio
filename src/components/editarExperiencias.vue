<template>
    <div class="editar-experiencias-container">
        <span>EDITAR EXPERIÊNCIAS</span>
        <button  @click="closeBox" class="close">X</button>
        <div v-if="userExperience.lastJob" class="experience-list">
            <h2>ÚLTIMO EMPREGO/ATUAL</h2>
            <div class="inputbox">
                <input required="required" class="input-value" type="text" @change="updateLastJob" :value="`${lastJobTitle}`">
                <span>Título</span>
            </div>
            <div class="inputbox">
                <input required="required" class="input-value" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.company}`">
                <span>Empresa</span>
            </div>
            <div class="inputbox">
                <textarea required="required" class="input-value" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.description}`"/>
                <span>Descrição</span>
            </div>
            <div class="data-input">
                <div class="inputbox">
                    <input class="input-value" type="date" @change="updateLastJob" :value="`${userExperience.lastJob.hired}`">
                    <span>Data de Adminção</span>
                </div>
                <div class="inputbox">
                    <input class="input-value" type="date" @change="updateLastJob" :value="`${userExperience.lastJob.end}`">
                    <span>Data de Demissão</span>
                </div>
            </div>
            
        </div>
        
        <div v-if="userExperience.job" class="experience-list">
            <p>PENÚLTIMO EMPREGO</p>
            <div class="inputbox">
                <input required="required" class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.title}`">
                <span>Título</span>
            </div>
            <div class="inputbox">
                <input required="required" class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.company}`">
                <span>Empresa</span>
            </div>
            <div class="inputbox">
                <textarea required="required" class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.description}`"/>
                <span>Descrição</span>
            </div>
            <div class="data-input">
                <div class="inputbox">
                    <input required="required" class="input-value" type="date" @change="updateJob" :value="`${userExperience.job.hired}`">
                    <span>Data de Admição</span>
                </div>
                <div class="inputbox">
                    <input required="required" class="input-value" type="date" @change="updateJob" :value="`${userExperience.job.end}`">
                    <span>Data de Demissão</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'editar-experiencias',
    props:{
        userExperience : Object,
        cor: String
    },
    data(){
        return{
            lastJobTitle: this.userExperience.lastJob.title
        }
    },
    methods:{
        closeBox(){
            //location.reload()
            document.getElementsByClassName('editar-experiencias')[0].style.display = 'none'
        },
        convertingDates(dia){
            if(!dia){
                return 'emprego atual'
            }
            const d = dia.split('-')
            const d1 = d[2]+"/"+d[1]+"/"+d[0]
            return d1
        },
        updateLastJob(){
            this.lastJobTitle = document.getElementsByClassName('input-value')[0].value
            let ljobcompany = document.getElementsByClassName('input-value')[1].value
            const ljobhired = document.getElementsByClassName('input-value')[3].value
            const ljobend = document.getElementsByClassName('input-value')[4].value
            const ljobdesciption = document.getElementsByClassName('input-value')[2].value
            localStorage.setItem('lastjob', this.lastJobTitle+","+ljobcompany+","+ljobhired+","+ljobend)
            localStorage.setItem('lastjobDescription', ljobdesciption)
            if(this.lastJobTitle){
               if(!ljobcompany){
                   ljobcompany = ''
               }
               document.getElementsByClassName('data-container-page-title')[0].textContent = this.lastJobTitle +" - "+ ljobcompany
            }
            if(ljobhired){
                document.getElementById('lastjob-dates').textContent = "de "+this.convertingDates(ljobhired) + " à " +this.convertingDates(ljobend)
            }
            if(ljobdesciption){
                document.getElementById('lastjob-description').textContent = ljobdesciption
            }
           document.getElementsByClassName('experiencias-container')[0].style.opacity = '100%'
        },
        updateJob(){
            const jobtitle = document.getElementsByClassName('input-value')[5].value
            let jobcompany = document.getElementsByClassName('input-value')[6].value
            const jobhired = document.getElementsByClassName('input-value')[8].value
            const jobend = document.getElementsByClassName('input-value')[9].value
            const jobdesciption = document.getElementsByClassName('input-value')[7].value
            localStorage.setItem('job', jobtitle+","+jobcompany+","+jobhired+","+jobend)
            localStorage.setItem('jobDescription', jobdesciption)
            if(jobtitle){
               if(!jobcompany){
                   jobcompany = ''
               }
              document.getElementById('job-title').textContent = jobtitle +" - "+ jobcompany
            }
            if(jobhired){
                document.getElementById('job-dates').textContent = "de "+this.convertingDates(jobhired) + " à " +this.convertingDates(jobend)
            }
            if(jobdesciption){
                document.getElementById('job-description').textContent = jobdesciption
           }
           document.getElementsByClassName('experiencias-container')[1].style.opacity = '100%'
        }
    },
    mounted(){
        console.log(this.cor);
        document.getElementsByClassName('editar-experiencias-container')[0].style.backgroundColor = this.cor
        document.getElementsByClassName('editar-experiencias-container')[0].style.display = "none"
    },
    updated(){
        console.log(this.cor);
        document.getElementsByClassName('editar-experiencias-container')[0].style.backgroundColor = this.cor
    }
}
</script>
<style  scoped>
.data-input{
    display: flex;
    margin-top: 120px;
}
input{
    width: 200px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
}
textarea{
    width: 90% !important;
    height: 110px;
    border: black solid 2px;
    box-shadow: black 2px 2px 2px;
    overflow: scroll;
    background-color: #fff;
}
.editar-experiencias-container{
    color: white;
    width: 95%;
    margin-left: 1%;
    position: absolute;
    top: 10px;
    text-shadow: -1px 1px black;
}
</style>
<style>
.experience-list{
    margin-top: 50px;
    margin-bottom: 50px;
    height: 450px;
}
.inputbox {
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;
}
.inputbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  color: white;
  font: 16px;
}
.inputbox:last-child {
  margin-bottom: 0;
}
.inputbox span {
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
}
 .inputbox input:focus ~ span,
 .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
 .inputbox [type="button"] {
  width: 50%;
  background: dodgerblue;
  color: #fff;
  border: #fff;
}
 .inputbox:hover [type="button"] {
  background: linear-gradient(45deg, greenyellow, dodgerblue);
}

 .inputbox textarea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  color:white;
  overflow-x: hidden;
}
 .inputbox textarea:focus ~ span,
 .inputbox textarea:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
::-webkit-scrollbar{
    display: none;
}
</style>
