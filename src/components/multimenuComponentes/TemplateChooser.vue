<template>
    <div class="select-template">
        <button 
            @click="this.$emit('now-template1')"
            :style="template == 1 ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            <p>template1</p>
            <img src="../../assets/templatesImg/template1.png" alt="templateimg" />
        </button> 
        <button 
            @click="this.$emit('now-template2')"
            :style="template == 2 ? 'background-color: blue; color: white' : 'background-color: white; color: black'"
        >
            <p>template2</p>            
            <img src="../../assets/templatesImg/template2.png" alt="templateimg" />
        </button>
    </div>
</template>

<script>
export default {
    name: "TemplateChooser",
    props:{
        template: Number
    },
    emits:['now-template1', 'now-template2']
}
</script>
<style scoped>

button {
    border-radius: 15px;
    color: black;
    background-color: white;
    margin-left: 10px;
}

button img {
    width: 40px;
    height: 80px;
}

.select-template{
    display: flex;
}
</style>