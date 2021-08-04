<template>
    <div class="editar-experiencias-container">
        <span>EDITAR EXPERIÊNCIAS</span>
        <button  @click="closeBox" class="close">X</button>
        <div v-if="userExperience.lastJob" class="experience-list">
            <p>ÚLTIMO EMPREGO/ATUAL</p>
            <input placeholder="título" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.title}`">
            <input placeholder="empresa" type="text" @change="updateJob" :value="`${userExperience.lastJob.company}`">
            <input placeholder="data da contratação" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.hired}`">
            <input placeholder="data da demissão" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.end}`">
            <textarea placeholder="descrição" type="text" @change="updateLastJob" :value="`${userExperience.lastJob.description}`"/>
        </div>
        
        <div v-if="userExperience.job" class="experience-list">
            <p>PENÚLTIMO EMPREGO</p>
            <input type="text" @change="updateJob" :value="`${userExperience.job.title}`">
            <input type="text" @change="updateJob" :value="`${userExperience.job.company}`">
            <input type="text" @change="updateJob" :value="`${userExperience.job.hired}`">
            <input type="text" @change="updateJob" :value="`${userExperience.job.end}`">
            <textarea type="text" @change="updateJob" :value="`${userExperience.job.description}`"/>
        </div>
    </div>
</template>
<script>
export default {
    name : 'editar-experiencias',
    props:{
        userExperience : Object,
    },
    methods:{
        closeBox(){
            document.getElementsByClassName('editar-experiencias')[0].style.display = 'none'
        },
        updateLastJob(){
            console.log(document.getElementsByName('input')[0].value)
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