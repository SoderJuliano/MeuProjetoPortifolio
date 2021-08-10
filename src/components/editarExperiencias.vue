<template>
    <div class="editar-experiencias-container">
        <span>EDITAR EXPERIÊNCIAS</span>
        <button  @click="closeBox" class="close">X</button>
        <div v-if="userExperience.lastJob" class="experience-list">
            <p>ÚLTIMO EMPREGO/ATUAL</p>
            <input class="input-value" placeholder="título" type="text" @change="updateLastJob" :value="`${lastJobTitle}`">
            <input class="input-value" placeholder="empresa" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.company}`">
            <input class="input-value" placeholder="data da contratação" type="date" @change="updateLastJob" :value="`${userExperience.lastJob.hired}`">
            <input class="input-value" placeholder="data da demissão" type="date" @change="updateLastJob" :value="`${userExperience.lastJob.end}`">
            <textarea class="input-value" placeholder="descrição" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.description}`"/>
        </div>
        
        <div v-if="userExperience.job" class="experience-list">
            <p>PENÚLTIMO EMPREGO</p>
            <input class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.title}`">
            <input class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.company}`">
            <input class="input-value" type="date" @change="updateJob" :value="`${userExperience.job.hired}`">
            <input class="input-value" type="date" @change="updateJob" :value="`${userExperience.job.end}`">
            <textarea class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.description}`"/>
        </div>
    </div>
</template>
<script>
export default {
    name : 'editar-experiencias',
    props:{
        userExperience : Object,
    },
    data(){
        return{
            lastJobTitle: this.userExperience.lastJob.title,

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
            const ljobhired = document.getElementsByClassName('input-value')[2].value
            const ljobend = document.getElementsByClassName('input-value')[3].value
            const ljobdesciption = document.getElementsByClassName('input-value')[4].value
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
            const jobhired = document.getElementsByClassName('input-value')[7].value
            const jobend = document.getElementsByClassName('input-value')[8].value
            const jobdesciption = document.getElementsByClassName('input-value')[9].value
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
    }
}
</script>
<style  scoped>
input{
    width: 200px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    margin: 10px;
}
textarea{
    width: 100%;
    height: 100px;
}
.editar-experiencias-container{
    height: 100%;
}
</style>