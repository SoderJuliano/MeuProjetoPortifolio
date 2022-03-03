<template>
    <div style="display:flex">
        <button 
            @click="this.$emit('now-template1')"
            :style="template == 1 ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            template1</button> 
        <button 
            @click="this.$emit('now-template2')"
            :style="template == 2 ? 'background-color: blue; color: white' : 'background-color: white; color: black'"
        >template2</button>
    </div>
</template>
<script>
export default {
    name: "templateChooser",
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
</style>