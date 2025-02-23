<template>
    <div class="select-template">
        <button 
            @click="this.$emit('now-template3')"
            :style="template == 3 ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            <p>Normal</p>
            <img src="../../assets/templatesImg/templete3.png" alt="templateimg" />
        </button> 
        <button 
            @click="this.$emit('now-template1')"
            :style="template == 1 ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            <p>Style 1</p>
            <img src="../../assets/templatesImg/template1.png" alt="templateimg" />
        </button> 
        <button 
            @click="this.$emit('now-template2')"
            :style="template == 2 ? 'background-color: blue; color: white' : 'background-color: white; color: black'"
        >
            <p>Style 2</p>
            <img src="../../assets/templatesImg/template2.png" alt="templateimg" />
        </button>
        <button
            @click="this.$emit('now-template4')"
            :style="template == 4 ? 'background-color: blue; color: white' : 'background-color: white; color: black'"
        >
            <p>Normal 2</p>
            <img src="../../assets/templatesImg/template4.png" alt="templateimg" />
        </button>
    </div>
</template>

<script>
export default {
    name: "TemplateChooser",
    props:{
        template: Number
    },
    emits:['now-template1', 'now-template2', 'now-template3', 'now-template4']
}
</script>
<style scoped>

button {
    border-radius: 15px;
    color: black;
    background-color: white;
    margin-left: 10px;
    width: 40px;
}

button img {
    width: 40px;
    height: 80px;
}

.select-template {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 55px;
    z-index: 2;
}
</style>