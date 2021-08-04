<template>
    <div class="editar-experiencias-container">
        <span>EDITAR EXPERIÊNCIAS</span>
        <button  @click="closeBox" class="close">X</button>
        <div v-if="userExperience.lastJob" class="experience-list">
            <p>ÚLTIMO EMPREGO/ATUAL</p>
            <input class="input-value" placeholder="título" type="text" @change="updateLastJob" :value="`${lastJobTitle}`">
            <input class="input-value" placeholder="empresa" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.company}`">
            <input class="input-value" placeholder="data da contratação" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.hired}`">
            <input class="input-value" placeholder="data da demissão" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.end}`">
            <textarea class="input-value" placeholder="descrição" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.description}`"/>
        </div>
        
        <div v-if="userExperience.job" class="experience-list">
            <p>PENÚLTIMO EMPREGO</p>
            <input class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.title}`">
            <input class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.company}`">
            <input class="input-value" asp-format="{0:dd-MM-yyyy}" type="date" @change="updateJob" :value="`${userExperience.job.hired}`">
            <input class="input-value" type="text" @change="updateJob" :value="`${userExperience.job.end}`">
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
        updateLastJob(){
            this.lastJobTitle = document.getElementsByClassName('input-value')[0].value
            const ljobcompany = document.getElementsByClassName('input-value')[1].value
            const ljobhired = document.getElementsByClassName('input-value')[2].value
            const ljobend = document.getElementsByClassName('input-value')[3].value
            const ljobdesciption = document.getElementsByClassName('input-value')[4].value
            localStorage.setItem('lastjob', this.lastJobTitle+","+ljobcompany+","+ljobhired+","+ljobend)
            localStorage.setItem('lastjobDesciption', ljobdesciption)
            document.getElementsByClassName('data-container-page-title')[0].textContent = this.lastJobTitle +" - "+ ljobcompany
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
</style>