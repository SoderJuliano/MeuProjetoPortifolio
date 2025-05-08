<template>
    <div class="select-template">
        <button 
            @click="select('now-template3')"
            :style="template == 3 ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            <p>Normal</p>
            <img src="../../assets/templatesImg/templete3.png" alt="templateimg" />
        </button> 
        <button 
            @click="select('now-template1')"
            :style="template == 1 ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            <p>Style 1</p>
            <img src="../../assets/templatesImg/template1.png" alt="templateimg" />
        </button> 
        <button 
            @click="select('now-template2')"
            :style="template == 2 ? 'background-color: blue; color: white' : 'background-color: white; color: black'"
        >
            <p>Style 2</p>
            <img src="../../assets/templatesImg/template2.png" alt="templateimg" />
        </button>
        <button
            @click="select('now-template4')"
            :style="template == 4 ? 'background-color: blue; color: white' : 'background-color: white; color: black'"
        >
            <p>Normal 2</p>
            <img src="../../assets/templatesImg/template4.png" alt="templateimg" />
        </button>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "TemplateChooser",
    props: {
        template: Number
    },
    emits: [
        'now-template1',
         'now-template2',
        'now-template3',
        'now-template4',
        ],
        methods: {
            select(val) {
                this.$emit(val)
                $(".closeDiv").click();
                $(".navbar__toggle").click();
            }
        }
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